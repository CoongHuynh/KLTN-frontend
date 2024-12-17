import React, { useState, useEffect } from "react";
import Roadmap from "../../components/RoadmapComponent/Roadmap";
import {
  ProfileContainer,
  Sidebar,
  SidebarGroup,
  SidebarItem,
  ProfileForm,
} from "./styles";
import { MyProfile, AddressBook, PaymentOptions } from "./Account";
import OrderListComponent from "./Order";
import { updateProfile } from "../../redux/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByUserId } from "../../redux/slices/orderSlice";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.orders);

  const [selectedItem, setSelectedItem] = useState("My Profile");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await dispatch(updateProfile(profile)).unwrap();
      alert("Profile saved successfully");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };
  useEffect(() => {
    if (user) {
      dispatch(fetchOrdersByUserId(user.id));
    }
  }, [dispatch, user]);
  console.log(orders);
  const renderForm = () => {
    const filteredOrders = orders.filter(
      (order) => order.status === selectedItem.toLowerCase()
    );
    console.log(filteredOrders);
    switch (selectedItem) {
      case "My Profile":
        return (
          <MyProfile
            profile={profile}
            handleChange={handleChange}
            handleSaveChanges={handleSaveChanges}
          />
        );
      case "Address Book":
        return <AddressBook />;
      case "My Payment Options":
        return <PaymentOptions />;
      case "Processing":
      case "Shipped":
      case "Cancelled":
      case "awaiting_payment":
        return (
          <OrderListComponent title={selectedItem} orders={filteredOrders} />
        );
      case "My WishList":
        return (
          <ProfileForm>
            <h2>My WishList</h2>
          </ProfileForm>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Roadmap hiển thị đường dẫn */}
      <Roadmap />
      <ProfileContainer>
        {/* Sidebar chứa các mục quản lý tài khoản */}
        <Sidebar>
          <SidebarGroup>
            <h4>My Account</h4>
            <SidebarItem
              className={selectedItem === "My Profile" ? "active" : ""}
              onClick={() => setSelectedItem("My Profile")}
            >
              My Profile
            </SidebarItem>
            <SidebarItem
              className={selectedItem === "Address Book" ? "active" : ""}
              onClick={() => setSelectedItem("Address Book")}
            >
              Address Book
            </SidebarItem>
            <SidebarItem
              className={selectedItem === "My Payment Options" ? "active" : ""}
              onClick={() => setSelectedItem("My Payment Options")}
            >
              My Payment Options
            </SidebarItem>
          </SidebarGroup>

          <SidebarGroup>
            <h4>My Orders</h4>
            <SidebarItem
              className={selectedItem === "awaiting_payment" ? "active" : ""}
              onClick={() => setSelectedItem("awaiting_payment")}
            >
              Awaiting Payment
            </SidebarItem>
            <SidebarItem
              className={selectedItem === "Processing" ? "active" : ""}
              onClick={() => setSelectedItem("Processing")}
            >
              Processing
            </SidebarItem>
            <SidebarItem
              className={selectedItem === "Shipped" ? "active" : ""}
              onClick={() => setSelectedItem("Shipped")}
            >
              Shipped
            </SidebarItem>
            <SidebarItem
              className={selectedItem === "Cancelled" ? "active" : ""}
              onClick={() => setSelectedItem("Cancelled")}
            >
              Cancelled
            </SidebarItem>
          </SidebarGroup>

          <SidebarGroup>
            <h4>My WishList</h4>
            <SidebarItem
              className={selectedItem === "My WishList" ? "active" : ""}
              onClick={() => setSelectedItem("My WishList")}
            >
              My WishList
            </SidebarItem>
          </SidebarGroup>
        </Sidebar>

        {/* Form chỉnh sửa thông tin tài khoản */}
        {renderForm()}
      </ProfileContainer>
    </div>
  );
};

export default ProfilePage;
