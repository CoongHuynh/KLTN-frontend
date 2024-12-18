import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 150px;
  margin-right: 40px;
`;

export const SidebarGroup = styled.div`
  margin-bottom: 40px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const SidebarItem = styled.div`
  font-size: 16px;
  color: #666;
  padding: 10px 0;
  cursor: pointer;
  transition: color 0.3s;
  padding-left: 2em;

  &:hover {
    color: #e74c3c;
  }

  &.active {
    color: #e74c3c;
    font-weight: bold;
  }
`;

export const ProfileForm = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: #e74c3c;
    margin-bottom: 30px;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &::placeholder {
    color: #888;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

export const SaveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 12px 20px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d13b2f;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  color: #888;
  padding: 12px 20px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #333;
    border-color: #333;
  }
`;
export const StarsContainer = styled.div`
  display: flex;
  width: 10px;
  gap: 2px;
`;

export const Star = styled.img`
  width: 15px;
  height: 15px;
`;

export const OrderContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;

  .flex {
    display: flex;
    gap: 20px;
  }

  .date {
    margin-left: 10px;
    color: #007bff;
    color: #000;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;

  > img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;

  .product-name {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .rattings,
  .return-policy {
    font-size: 12px;
    color: #666;
  }
`;

export const PriceInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  .stock {
    font-size: 14px;
    color: #666;
  }
`;

export const OrderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 10px;

  .actions {
    display: flex;
    gap: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f56b2a;
  color: #fff;
  font-weight: bold;
  &cancel-btn {
    background-color: #f56b2a;
  }
  &.review-btn {
    background-color: #007bff;
  }

  &.reorder-btn {
    background-color: #4caf50;
  }
  &.hide {
    background-color: #fff;
    border: none;
    transition: var(--smooth);
  }
`;

export const StatusBadge = styled.span`
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${({ status }) =>
    status === "HOÀN THÀNH" ? "#4caf50" : "#f44336"};
  color: #fff;
  font-weight: bold;
`;

export const ReviewForm = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitReviewButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #218838;
  }
`;
export const WishlistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const WishlistItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const WishlistImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const WishlistDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WishlistName = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const WishlistPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
