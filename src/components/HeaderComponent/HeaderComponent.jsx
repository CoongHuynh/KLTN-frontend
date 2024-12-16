import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import CategoryMenu from "../Category/CategoryMenu";
import SearchBarBox from "./SearchBar";
import Swal from "sweetalert2";

import {
  HeaderContainer,
  HeaderInner,
  Logo,
  NavItem,
  ShoppingCart,
  ProfileMenu,
  UserIconWrapper,
  DropdownContainer,
  NavButton,
} from "./styles";
import {
  InboxOutlined,
  CloseCircleOutlined,
  StarOutlined,
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/cart");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please login",
        text: "You need to login to view your cart.",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleUserIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderInner>
          {/* <CategoryMenu /> */}
          <Logo>
            <Link to="/">
              <img
                src="/gif/shopLogo.gif"
                alt="MERN Shop"
                style={{ width: "3em", height: "3em" }}
              />
            </Link>
          </Logo>
          {/* Search Bar */}
          <SearchBarBox />

          {/* Shopping Cart */}
          <ShoppingCart>
            <a href="/cart" onClick={handleCartClick}>
              <ShoppingCartOutlined
                style={{
                  fontSize: "1.7em",
                  marginRight: "10px",
                  color: "var(--dark-bg-third)",
                }}
              />
              <span className="cart-count">{totalItems}</span>
              {/* Dynamic cart item count */}
            </a>
          </ShoppingCart>

          {/* Profile Menu */}
          <ProfileMenu ref={dropdownRef}>
            {user ? (
              <>
                <ProfileMenu>
                  <UserIconWrapper onClick={handleUserIconClick}>
                    {user.name} <DownOutlined className="dropdown-icon" />
                  </UserIconWrapper>
                  <DropdownContainer visible={dropdownVisible}>
                    <NavItem>
                      <Link to="/profile">
                        <i className="icon">
                          <UserOutlined />
                        </i>{" "}
                        My Account
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/orders">
                        <i className="icon">
                          <InboxOutlined />
                        </i>{" "}
                        My Order
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/cancellations">
                        <i className="icon">
                          <CloseCircleOutlined />
                        </i>{" "}
                        My Cancellations
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/reviews">
                        <i className="icon">
                          <StarOutlined />
                        </i>{" "}
                        My Reviews
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/" onClick={handleLogout}>
                        <i className="icon">
                          <LogoutOutlined />
                        </i>{" "}
                        Logout
                      </Link>
                    </NavItem>
                  </DropdownContainer>
                </ProfileMenu>
              </>
            ) : (
              <>
                <ProfileMenu>
                  <UserIconWrapper onClick={handleUserIconClick}>
                    Welcome <DownOutlined className="dropdown-icon" />
                  </UserIconWrapper>
                  <DropdownContainer visible={dropdownVisible}>
                    <NavItem>
                      <Link
                        style={{
                          fontSize: "1.2em",
                          color: "var(--dark-bg-third)",
                        }}
                        to="/login"
                      >
                        Login
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        style={{
                          fontSize: "1.2em",
                          color: "var(--dark-bg-third)",
                        }}
                        to="/login?register=true"
                      >
                        Register
                      </Link>
                    </NavItem>
                  </DropdownContainer>
                </ProfileMenu>
              </>
            )}
          </ProfileMenu>
        </HeaderInner>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
