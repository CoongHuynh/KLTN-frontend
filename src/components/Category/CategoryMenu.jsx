import React, { useState } from "react";
import {
  Overlay,
  MenuContainer,
  CategoryList,
  CategoryItem,
  BrandContainer,
  BrandItem,
  BestSellingContainer,
  BestSellingItem,
  Catalog,
  MenuIcon,
} from "./styles"; // Import các styled-component từ file style

const categories = [
  { name: "Điện thoại", icon: "📱" },
  { name: "Laptop", icon: "💻" },
  { name: "Phụ kiện", icon: "🎧" },
  { name: "Chuyên trang Apple", icon: "🍎" },
  { name: "Chuyên trang Samsung", icon: "🅂" },
  { name: "Chuyên trang Xiaomi", icon: "🅧" },
  // Các mục khác
];

const featured = [
  {
    name: "MacBook",
    icon: "🖥️",
  },
  {
    name: "Asus",
    icon: "💻",
  },
  {
    name: "Acer",
    icon: "🖥️",
  },
  {
    name: "HP",
    icon: "💼",
  },
];
const brands = [
  { name: "iPhone" },
  { name: "Samsung" },
  { name: "OPPO" },
  { name: "Xiaomi" },
  // Thương hiệu khác
];
const Apple = [
  { name: "MacBook Air 13 inch" },
  { name: "MacBook Air 15 inch" },
  { name: "MacBook Pro 13 inch" },
  { name: "MacBook Pro 14 inch" },
  { name: "MacBook Pro 15 inch" },
  { name: "MacBook Pro 16 inch" },
];
const Lenovo = [
  { name: "Lenovo Gaming LOQ" },
  { name: "Lenovo Yoga" },
  { name: "Lenovo Legion Gaming" },
  { name: "Lenovo ThinkBook" },
  { name: "Lenovo ThinkPad" },
  { name: "Lenovo IdeaPad" },
];
const Dell = [
  { name: "Dell XPS" },
  { name: "Dell Inspiron" },
  { name: "Dell Vostro" },
];
const Asus = [
  { name: "Asus ZenBook" },
  { name: "Asus VivoBook" },
  { name: "Asus TUF Gaming" },
];
const bestSelling = [
  { name: "iPhone 16", price: "25.990.000₫", imgSrc: "url_of_image_1" },
  { name: "iPhone 16 Plus", price: "34.990.000₫", imgSrc: "url_of_image_2" },
];

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Catalog onClick={toggleMenu}>
        <MenuIcon />
      </Catalog>

      {isOpen && (
        <>
          <Overlay onClick={toggleMenu} />
          <div className="container">
            <MenuContainer>
              <CategoryList>
                {categories.map((category, index) => (
                  <CategoryItem key={index}>
                    <span>{category.icon}</span> {category.name}
                  </CategoryItem>
                ))}
              </CategoryList>
              <BrandContainer>
                <div>
                  {brands.map((brand, index) => (
                    <BrandItem key={index}>{brand.name}</BrandItem>
                  ))}
                </div>
                <div>
                  {featured.map((brand, index) => (
                    <BrandItem key={index}>{brand.name}</BrandItem>
                  ))}
                </div>
                <div>
                  {Apple.map((brand, index) => (
                    <BrandItem key={index}>{brand.name}</BrandItem>
                  ))}
                </div>
                <div>
                  {Lenovo.map((brand, index) => (
                    <BrandItem key={index}>{brand.name}</BrandItem>
                  ))}
                </div>
                <div>
                  {Dell.map((brand, index) => (
                    <BrandItem key={index}>{brand.name}</BrandItem>
                  ))}
                </div>
                <div>
                  {Asus.map((brand, index) => (
                    <BrandItem key={index}>{brand.name}</BrandItem>
                  ))}
                </div>
              </BrandContainer>
              <BestSellingContainer>
                {bestSelling.map((item, index) => (
                  <BestSellingItem key={index}>
                    <img src={item.imgSrc} alt={item.name} />
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                  </BestSellingItem>
                ))}
              </BestSellingContainer>
            </MenuContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryMenu;
