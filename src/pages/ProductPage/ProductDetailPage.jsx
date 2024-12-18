import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/slices/productSlice";
import ProductDetail from "../../components/ProductComponent/ProductDetail";
import Roadmap from "../../components/RoadmapComponent/Roadmap";
import Swl from "sweetalert2";
import { navigate } from "react-router-dom";
const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy productId từ URL
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading && (
        <div className="loading">
          <div></div>
        </div>
      )}
      {error &&
        Swl.fire({
          icon: "error",
          title: "Oops...",
          text: error?.toString(),
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        })}
      {/* Roadmap hiển thị đường dẫn */}
      <Roadmap />
      {product && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductDetailPage;
