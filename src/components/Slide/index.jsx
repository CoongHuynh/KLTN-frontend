import React from "react";
import Slider from "react-slick";
import {
  PromoContainer,
  PromoContent,
  PromoText,
  PromoTitle,
  PromoButton,
} from "./styles";

// Array of promo slides with image, title, and description
const promoSlides = [
  {
    image:
      "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727940034/banner/banner%203.png.png",
    title: "Giảm giá 20% cho tất cả các sản phẩm",
    description: "Chỉ trong tuần này! Nhanh tay đặt hàng.",
    link: "/promotions",
  },
  {
    image:
      "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727940035/banner/banner%202.png.png",
    title: "Mua 1 tặng 1 - Sản phẩm công nghệ",
    description: "Khuyến mãi có hạn cho các sản phẩm công nghệ hàng đầu.",
    link: "/tech-deals",
  },
  {
    image:
      "https://res.cloudinary.com/dihhw7jo1/image/upload/v1727940037/banner/banner%201.png.png",
    title: "Giảm giá cuối mùa",
    description: "Sản phẩm giảm giá đến 50%.",
    link: "/clearance-sale",
  },
];

const PromoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3800,
    arrows: false,
  };

  return (
    <PromoContainer>
      <Slider {...settings}>
        {promoSlides.map((slide, index) => (
          <div key={index}>
            <PromoContent
              style={{ backgroundImage: `url(${slide.image})`, width: "100%" }}
            >
              <PromoText>
                <PromoTitle>{slide.title}</PromoTitle>
                <p>{slide.description}</p>
                <PromoButton href={slide.link}>Xem khuyến mãi</PromoButton>
              </PromoText>
            </PromoContent>
          </div>
        ))}
      </Slider>
    </PromoContainer>
  );
};

export default PromoSlider;
