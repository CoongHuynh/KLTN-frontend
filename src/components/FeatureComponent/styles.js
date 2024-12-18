import styled from "styled-components";

// Container của các tính năng
export const FeaturesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 20px;
  position: relative;
`;

// Card từng tính năng
export const FeatureCard = styled.div`
  text-align: center;
  max-width: 200px;
`;

// Vùng chứa icon
export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconWrapperInner = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--dark-bg-primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
// Tiêu đề tính năng
export const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;

// Mô tả tính năng
export const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

// Nút cuộn lên đầu trang
export const ScrollToTopButton = styled.button`
  position: absolute;
  bottom: 1em;
  right: -10em;
  background-color: var(--dark-bg-primary);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
