import React from "react";
import {
  ArrowUpOutlined,
  CarOutlined,
  CustomerServiceOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import {
  FeaturesContainer,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
  ScrollToTopButton,
  IconWrapperInner,
} from "./styles";

const FeatureSection = () => {
  // Hàm để cuộn lên đầu trang khi nhấn vào nút
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FeaturesContainer>
      <FeatureCard>
        <IconWrapper>
          <IconWrapperInner>
            {" "}
            <CarOutlined style={{ fontSize: "32px", color: "white" }} />
          </IconWrapperInner>
        </IconWrapper>
        <FeatureTitle>FREE AND FAST DELIVERY</FeatureTitle>
        <FeatureDescription>
          Free delivery for all orders over $140
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper>
          <IconWrapperInner>
            {" "}
            <CustomerServiceOutlined
              style={{ fontSize: "32px", color: "white" }}
            />
          </IconWrapperInner>
        </IconWrapper>
        <FeatureTitle>24/7 CUSTOMER SERVICE</FeatureTitle>
        <FeatureDescription>Friendly 24/7 customer support</FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper>
          <IconWrapperInner>
            {" "}
            <SafetyOutlined style={{ fontSize: "32px", color: "white" }} />
          </IconWrapperInner>
        </IconWrapper>
        <FeatureTitle>MONEY BACK GUARANTEE</FeatureTitle>
        <FeatureDescription>We return money within 30 days</FeatureDescription>
      </FeatureCard>

      <ScrollToTopButton onClick={handleScrollToTop}>
        <ArrowUpOutlined />
      </ScrollToTopButton>
    </FeaturesContainer>
  );
};

export default FeatureSection;
