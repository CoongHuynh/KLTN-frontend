import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  PhoneOutlined,
  DesktopOutlined,
  CameraOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { FiWatch } from "react-icons/fi";
import { LuGamepad } from "react-icons/lu";
import { CategoryContainer, Header, CategoryList, CategoryCard } from "./style";
import {
  fetchFilterProduct,
  setFilteredProducts,
} from "../../redux/slices/productSlice";

const CategorySection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = async (category) => {
    // Fetch filtered products
    const result = await dispatch(
      fetchFilterProduct({ category, page: 1 })
    ).unwrap();
    // Set filtered products in state
    dispatch(setFilteredProducts(result.products));
    // Navigate to product page
    navigate(`/products?category=${category}`);
  };

  return (
    <CategoryContainer>
      <Header>
        <div>
          <h3>Category</h3>
          <h1>Brower By Category</h1>
        </div>
      </Header>
      <CategoryList>
        <CategoryCard
          onClick={() => handleCategoryClick("66fe3bf32f18a9da5b8b0052")}
        >
          <PhoneOutlined />
          <span>Phones</span>
        </CategoryCard>
        <CategoryCard
          onClick={() => handleCategoryClick("66fe3e22207cd8d5fc4af242")}
        >
          <DesktopOutlined />
          <span>Desktops</span>
        </CategoryCard>
        <CategoryCard
          onClick={() => handleCategoryClick("66fe3be02f18a9da5b8b0050")}
        >
          <FiWatch />
          <span>Watches</span>
        </CategoryCard>
        <CategoryCard
          onClick={() => handleCategoryClick("670df56c1f3c9852b5e66463")}
        >
          <CameraOutlined />
          <span>Cameras</span>
        </CategoryCard>
        <CategoryCard
          onClick={() => handleCategoryClick("670e0dc21f3c9852b5e66476")}
        >
          <AudioOutlined />
          <span>Audio</span>
        </CategoryCard>
        <CategoryCard onClick={() => handleCategoryClick("Gamepads")}>
          <LuGamepad />
          <span>Gamepads</span>
        </CategoryCard>
      </CategoryList>
    </CategoryContainer>
  );
};

export default React.memo(CategorySection);
