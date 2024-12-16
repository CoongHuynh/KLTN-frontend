import styled from "styled-components";

// Container của toàn bộ trang thanh toán
export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    max-width: 1200px;
    gap: 40px;
`;

// Phần chi tiết thanh toán (Billing Details)
export const BillingDetails = styled.div`
    flex: 1;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;

    & h2 {
        margin-bottom: 20px;
        font-weight: bold;
    }
`;

// Input Form
export const FormInput = styled.div`
    margin-bottom: 20px;

    & label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #333;
    }

    & input {
        width: 100%;
        padding: 12px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
`;

// Checkbox cho việc lưu thông tin
export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-top: 20px;

    & input {
        margin-right: 10px;
    }
`;

// Phần tổng kết đơn hàng (Order Summary)
export const OrderSummary = styled.div`
    width: 400px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;

    & h3 {
        margin-bottom: 20px;
        font-weight: bold;
    }
`;

// Item trong phần tổng kết đơn hàng
export const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    & span {
        font-size: 1rem;
        color: #333;
    }

    &:last-of-type {
        font-weight: bold;
    }
`;

// Phương thức thanh toán
export const PaymentMethod = styled.div`
    margin-top: 30px;

    & label {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        & input {
            margin-right: 10px;
        }

        & img {
            margin-left: 15px;
        }
    }
`;

// Container mã coupon
export const CouponContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    & input {
        flex: 1;
        padding: 10px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }

    & button {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: bold;

        &:hover {
            background-color: #c0392b;
        }
    }
`;

// Nút tiến hành đặt hàng
export const PlaceOrderButton = styled.button`
    width: 100%;
    margin-top: 30px;
    padding: 15px;
    background-color: #e74c3c;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #c0392b;
    }
`;
export const OrderSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

export const SuccessMessage = styled.h1`
    color: #2ecc71;
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

export const OrderDetails = styled.p`
    font-size: 1.2rem;
    margin-bottom: 20px;
`;

export const BackToHomeButton = styled.button`
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }
`;
