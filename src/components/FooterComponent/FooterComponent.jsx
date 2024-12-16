import React from "react";
import {
  FooterContainer,
  FooterInner,
  FooterSection,
  SectionTitle,
  SectionLinks,
  SocialIcons,
  CopyRight,
} from "./styles";
// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        {/* Company Information Section */}
        <FooterSection>
          <SectionTitle>About TechShop</SectionTitle>
          <p>
            TechShop is your go-to store for the latest and greatest tech
            products. From smartphones to laptops, we have everything you need.
          </p>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <SectionLinks>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/deals">Deals</a>
            </li>
            <li>
              <a href="/new-arrivals">New Arrivals</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </SectionLinks>
        </FooterSection>

        {/* Contact Info Section */}
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <p>Email: support@techshop.com</p>
          <p>Phone: +123 456 7890</p>

          {/* Social Media Icons */}
          <SocialIcons>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </SocialIcons>
        </FooterSection>
      </FooterInner>

      {/* Copyright Section */}
      <CopyRight>
        &copy; {new Date().getFullYear()} TechShop. All rights reserved.
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
