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
import { useDispatch } from "react-redux";


const ordersData = [
  {
    status: "processing",
    product: [
      {
        name: "Mô hình con chuột",
        price: "15.000",
        stock: "12",
        ratings: "0",
        image:
          "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727766681/products/laptop%20asus%20vivobook%203.jpg.jpg",
      },
      {
        name: "Mô hình toy con chuột cao su",
        price: "15.000",
        stock: "12",
        ratings: "0",
        image:
          "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727766681/products/laptop%20asus%20vivobook%203.jpg.jpg",
      },
    ],
    total: "29.000",
    createdAt: "2021-09-01",
  },
  {
    status: "processing",
    product: [
      {
        name: "Mô hình con chuột",
        price: "15.000",
        stock: "12",
        ratings: "0",
        image:
          "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727766681/products/laptop%20asus%20vivobook%203.jpg.jpg",
      },
      {
        name: "Mô hình toy con chuột cao su",
        price: "15.000",
        stock: "12",
        ratings: "0",
        image:
          "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727766681/products/laptop%20asus%20vivobook%203.jpg.jpg",
      },
    ],
    total: "29.000",
    createdAt: "2021-09-01",
  },
  {
    status: "shipped",
    product: [
      {
        name: "Mô hình con chuột giả trang trí halloween, đồ chơi cho bé, trẻ em, toy con chuột cao su",
        price: "15.000",
        stock: "12",
        ratings: "0",
        image:
          "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727766681/products/laptop%20asus%20vivobook%203.jpg.jpg",
      },
      {
        name: "Mô hình con chuột giả trang trí halloween, đồ chơi cho bé, trẻ em, toy con chuột cao su",
        price: "15.000",
        stock: "12",
        ratings: "0",
        image:
          "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727766681/products/laptop%20asus%20vivobook%203.jpg.jpg",
      },
    ],
    total: "29.000",
    createdAt: "2021-09-01",
  },
];

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

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setOrders(ordersData);
  }, []);

  const renderForm = () => {
    const filteredOrders = orders.filter(
      (order) => order.status === selectedItem.toLowerCase()
    );
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
      case "Returned":
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
            <SidebarItem
              className={selectedItem === "Returned" ? "active" : ""}
              onClick={() => setSelectedItem("Returned")}
            >
              Returned
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
