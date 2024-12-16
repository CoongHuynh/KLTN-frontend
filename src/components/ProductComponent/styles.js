import styled from "styled-components";

// Nút thêm sản phẩm vào giỏ hàng
export const AddToCartButton = styled.button`
  display: none;
  position: absolute;
  background-color: #000;

  color: #fff;
  width: 100%;
  border: none;
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
  }
`;

// Container của toàn bộ trang chi tiết sản phẩm
export const ProductDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;
// Hình ảnh sản phẩm lớn
export const ProductDetailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

// Container cho thông tin chi tiết sản phẩm
export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// Mô tả sản phẩm
export const ProductDetailDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.5;
  color: #666;
  margin-bottom: 20px;
`;

// Giá sản phẩm
export const ProductDetailPrice = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 20px;
`;

// Số lượng trong kho
export const ProductDetailStock = styled.p`
  font-size: 1.2em;
  color: ${(props) => (props.stock > 0 ? "#4caf50" : "#f44336")};
  margin-bottom: 20px;
`;

// Nút thêm vào giỏ hàng
export const AddToCartDetailButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Container cho hình ảnh nhỏ
export const ThumbnailContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

// Hình ảnh nhỏ
export const ThumbnailImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: ${(props) => (props.isActive ? "2px solid #000" : "none")};
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #007bff;
  }
`;

// Nút mũi tên
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
// Styled Components
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Container của toàn bộ card sản phẩm
export const ProductCardContainer = styled.div`
  width: 220px;
  padding: 15px;
  border-radius: 10px;
  background: #ffffff;
  position: relative;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 8px;
`;

// Hình ảnh sản phẩm
export const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 8px;
`;

// Nhãn giảm giá
export const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff6f61;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: bold;
`;

// Các icon hành động
export const ProductActionIcons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

export const ActionIcon = styled.div`
  padding: 3px 5px;
  cursor: pointer;

  svg {
    margin-top: 3px;
    color: var(--color-secondary);
    font-size: 1.2em;
  }

  &:hover {
    svg {
      scale: 1.2;
      color: red;
    }
  }
`;

// Container thông tin chi tiết sản phẩm
export const ProductDetails = styled.div`
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 1.1em;
  margin: 5px 0;
  color: #333;
`;

export const ProductPrice = styled.div`
  margin: 10px 0;
  font-size: 1.2em;

  span {
    color: #ff6f61;
    font-weight: bold;
  }

  small {
    margin-left: 10px;
    font-size: 0.9em;
    text-decoration: line-through;
    color: #999;
  }
`;

export const ProductRating = styled.div`
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const AlertContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  animation: slide-in 0.5s ease-out, slide-out 0.5s ease-out 2.5s forwards;

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

export const Alert = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.severity === "success" ? "#28a745" : "#dc3545"};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  p {
    margin-left: 10px;
  }
`;

export const Star = styled.img`
  width: 15px;
  height: 15px;
`;
