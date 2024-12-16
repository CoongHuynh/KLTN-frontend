import HomePage from "../pages/HomePage/HomePage";
import NotfoundPage from "../pages/NotfoundPage/NotfoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductPage/ProductDetailPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ActivateForm from "../pages/HomePage/ActivateForm";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CartPage from "../pages/CartPage/CartPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPassword/ResetPasswordPage";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/profile",
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
    isShowHeader: false,
  },
  {
    path: "/forgot",
    page: ForgotPasswordPage,
    isShowHeader: false,
  },
  {
    path: "/checkout",
    page: CheckoutPage,
    isShowHeader: true,
  },
  {
    path: "/success",
    page: SuccessPage,
    isShowHeader: false,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeader: true,
  },
  {
    path: "/activate/:token", // Đảm bảo route này tồn tại
    page: ActivateForm,
    isShowHeader: false,
  },
  {
    path: "/product/:id",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/reset-password/*",
    page: ResetPasswordPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotfoundPage,
  },
];
