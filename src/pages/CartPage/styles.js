import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
// Container cho toàn bộ giỏ hàng
export const CartContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;

// Phần tiêu đề của giỏ hàng
export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 50px;
  text-align: left;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 2px solid #eee;
`;

// Container cho từng mục trong giỏ hàng
export const CartItemContainer = styled.div`
  display: grid;
  padding-left: 30px;
  grid-template-columns: 2fr 1fr 1fr 1fr 50px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  cursor: pointer;
`;

// Hình ảnh sản phẩm
export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

// Tên sản phẩm
export const ProductName = styled.span`
  font-size: 1em;
  font-weight: 500;
`;

// Giá sản phẩm
export const ProductPrice = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: #e91e63;
`;

// Số lượng sản phẩm
export const ProductQuantity = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 1em;
  text-align: center;
`;

// Tổng giá cho mỗi sản phẩm
export const ProductSubtotal = styled.span`
  font-size: 1em;
`;

// Nút để xóa sản phẩm khỏi giỏ hàng
export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #f44336;
  position: absolute;
  top: 0;
  left: -15px;
`;

// Nút để lưu số lượng sản phẩm
export const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  right: -60px; // Đặt vị trí bên cạnh trường số lượng
  top: 50%;
  transform: translateY(-50%);
`;

// Các hành động cho giỏ hàng như mã coupon, cập nhật giỏ hàng
export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

// Nút quay lại shop
export const ReturnToShopButton = styled.button`
  background: none;
  border: 1px solid #333;
  padding: 10px 20px;
  cursor: pointer;
`;

// Input mã coupon
export const CouponInput = styled.input`
  padding: 10px;
  width: 20em;
  border: 1px solid #e0e0e0;
  margin-right: 10px;
`;

// Nút áp dụng mã coupon
export const ApplyCouponButton = styled.button`
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

// Nút cập nhật giỏ hàng
export const UpdateCartButton = styled.button`
  background: none;
  border: 1px solid #333;
  padding: 10px 20px;
  cursor: pointer;
`;

// Container cho phần mã coupon và tổng giá trị giỏ hàng
export const CouponAndTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

// Container tính toán tổng giá trị giỏ hàng
export const CartTotalContainer = styled.div`
  padding: 1.25em;
  border: 1px solid #333;
  width: 29.375em;
  align-self: flex-end;
  background-color: #ffffff;
  margin-top: 1.25em;

  & > h3 {
    margin-bottom: 1.25em;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`;

// Chi tiết từng dòng tổng giá trị giỏ hàng
export const CartTotalDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-of-type {
    border-bottom: none; // Không có đường viền ở phần cuối
    font-weight: bold;
  }

  & > span {
    font-size: 1rem;
    color: #555;
  }
`;

// Nút tiến hành thanh toán
export const ProceedToCheckoutButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b; // Màu đậm hơn khi hover
  }
`;

export const SelectItemCheckbox = styled.input`
  position: absolute;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
`;

export const CardBody = styled.div`
  padding: 1rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.075);
`;
export const TableResponsive = styled.div`
  overflow-x: auto;
`;
export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dee2e6;
  .eye {
    display: flex;
    justify-content: flex-end;
  }
  .bold {
    font-weight: bold;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.3em 0.45em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
  color: ${(props) => (props.variant === "success" ? "#fff" : "#fff")};
  background-color: ${(props) =>
    props.variant === "success" ? "#28a745" : "#dc3545"};
`;

export const IconLink = styled(Link)`
  color: #28a745;
  text-decoration: none;
  &:hover {
    color: #218838;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
`;

export const SidebarHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export const SidebarContent = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductImageSidebar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 16px;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.a`
  font-size: 16px;
  color: #1e88e5;
  text-decoration: none;
  margin-bottom: 8px;
  display: inline-block;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #eee;
`;

export const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  background-color: ${({ primary }) => (primary ? "#1e88e5" : "#9e9e9e")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: ${({ primary }) => (primary ? "0" : "8px")};
`;
