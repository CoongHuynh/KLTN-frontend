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
import {
  fetchRecommendations,
  fetchRecommenProductForUser,
} from "../../redux/slices/recommenSlice";
import Roadmap from "../../components/RoadmapComponent/Roadmap";
import ProductGrid from "./ProductGrid";
import ProductListSection from "./ProductListSection";
import CategorySection from "./CategorySection";
import FeatureSection from "../../components/FeatureComponent/FeatrureSection";
import ImageGrid from "../../components/FeatureComponent/ImageGrid";
import ChatBotButton from "../../components/ChatBot/ChatBotButton";
import { TopBanner } from "./style";
import Swl from "sweetalert2";
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
  const {
    favorites,
    loading: faLoading,
    error: faError,
  } = useSelector((state) => state.favorites) || {};
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useSelector((state) => state.auth);
  const {
    userRecommendations,
    generalRecommendations,
    loading: suggestionsLoading,
    error: suggestionsError,
  } = useSelector((state) => state.recommendations);

  useEffect(() => {
    const loadInitialData = async () => {
      await dispatch(getFavorites());
      await dispatch(fetchProducts());
      await dispatch(getCart());
      await dispatch(fetchTopProductsByViews(10));
      await dispatch(fetchRecommendations());
      if (user) {
        await dispatch(fetchRecommenProductForUser());
      }
    };
    loadInitialData();
  }, [dispatch, user]);

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
  if (!favorites) {
    Swl.fire({
      icon: "error",
      title: "Alert",
      text: "Please login to continue",
    });
  }
  const memoizedUserRecommendations = useMemo(
    () => userRecommendations,
    [userRecommendations]
  );
  console.log(
    "userRecommendations",
    userRecommendations,
    memoizedUserRecommendations
  );
  const memoizedGeneralRecommendations = useMemo(
    () => generalRecommendations.map((item) => item.product),
    [generalRecommendations]
  );
  const memoizedFavorites = useMemo(() => favorites, [favorites]);

  return (
    <div>
      {(loading || faLoading || userLoading) && (
        <div className="loading">
          <div></div>
        </div>
      )}
      {(error || faError || userError) &&
        Swl.fire({
          icon: "error",
          title: "Oops...",
          text: error?.toString(),
        })}
      <Roadmap />
      <ChatBotButton />
      <div className="container">
        <PromoSlider />

        {user && (
          <ProductGrid
            ref={gridRef}
            products={memoizedUserRecommendations}
            favorites={memoizedFavorites}
            userSuggest={true}
          >
            {suggestionsLoading && (
              <div className="loading">
                <div></div>
              </div>
            )}
            {suggestionsError &&
              Swl.fire({
                icon: "error",
                title: "Oops...",
                text: suggestionsError?.toString(),
              })}
          </ProductGrid>
        )}
        <ImageGrid />
        <ProductGrid
          ref={gridRef}
          products={memoizedGeneralRecommendations}
          favorites={memoizedFavorites}
          userSuggest={false}
        >
          {suggestionsLoading && (
            <div className="loading">
              <div></div>
            </div>
          )}
          {suggestionsError &&
            Swl.fire({
              icon: "error",
              title: "Oops...",
              text: suggestionsError?.toString(),
            })}
        </ProductGrid>
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
        <FeatureSection />
      </div>
    </div>
  );
};

export default HomePage;
