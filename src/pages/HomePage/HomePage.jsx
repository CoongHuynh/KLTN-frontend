import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromoSlider from "../../components/Slide";
import {
  fetchFilterProduct,
  fetchProducts,
  setPage,
  fetchTopProductsByViews,
} from "../../redux/slices/productSlice";
import { getFavorites } from "../../redux/slices/favoriteSlice";
import { getCart } from "../../redux/slices/cartSlice";
import Roadmap from "../../components/RoadmapComponent/Roadmap";
import FlashSale from "../../components/QuickviewComponent/QuickView";
import ProductGrid from "./ProductGrid";
import ProductListSection from "./ProductListSection";
import CategorySection from "./CategorySection";
import FeatureSection from "../../components/FeatureComponent/FeatrureSection";
import ChatBotButton from "../../components/ChatBot/ChatBotButton";
import { TopBanner } from "./style";
const HomePage = () => {
  const dispatch = useDispatch();
  const gridRef = useRef();
  const [localProducts, setLocalProducts] = useState([]);
  const [localTopProducts, setLocalTopProducts] = useState([]);
  const [localFeaturedProducts, setLocalFeaturedProducts] = useState([]);

  const {
    topProducts,
    products,
    featuredProducts,
    loading,
    error,
    currentPage,
    productsPerPage,
    totalPages,
  } = useSelector((state) => state.products);
  const { favorites } = useSelector((state) => state.favorites) || {};

  useEffect(() => {
    dispatch(getFavorites());
    dispatch(fetchProducts());
    dispatch(getCart());
    dispatch(fetchTopProductsByViews(10));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFilterProduct({ page: currentPage, limit: productsPerPage }));
  }, [dispatch, currentPage, productsPerPage]);

  useEffect(() => {
    setLocalProducts(products);
    setLocalTopProducts(topProducts);
    setLocalFeaturedProducts(featuredProducts);
  }, [products, featuredProducts, topProducts]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  }, [dispatch, currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  }, [dispatch, currentPage, totalPages]);

  const memoizedProducts = useMemo(() => localProducts, [localProducts]);
  const memoizedTopProducts = useMemo(
    () => localTopProducts,
    [localTopProducts]
  );
  const memoizedFilterProducts = useMemo(
    () => localFeaturedProducts,
    [localFeaturedProducts]
  );
  const memoizedFavorites = useMemo(() => favorites, [favorites]);
  console.log(memoizedFavorites);
  console.log(memoizedFilterProducts);
  console.log(memoizedTopProducts);
  return (
    <div>
      {loading && <div className="loading"></div>}
      {error && <p>{error}</p>}
      <Roadmap />
      <ChatBotButton />
      <div className="container">
        <TopBanner>
          <PromoSlider />
        </TopBanner>
        <CategorySection />

        <ProductListSection
          products={memoizedFilterProducts}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
          maxItemsPerRow={5}
          favorites={memoizedFavorites}
        />
        <ProductGrid
          ref={gridRef}
          products={memoizedTopProducts}
          favorites={memoizedFavorites}
        />
        <FlashSale />
        <FeatureSection />
      </div>
    </div>
  );
};

export default HomePage;
