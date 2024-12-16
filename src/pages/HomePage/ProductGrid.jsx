import React, { useRef, useImperativeHandle } from "react";
import ProductCart from "../../components/ProductComponent/ProductCart";
import ArrowButtons from "./ArrowButtons";
import {
  ProductGrid as StyledProductGrid,
  Header,
  Countdown,
  CountdownItem,
} from "./style";

const ProductGrid = React.forwardRef(({ products, favorites }, ref) => {
  const gridRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (gridRef.current) {
        gridRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    },
    scrollRight: () => {
      if (gridRef.current) {
        gridRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    },
  }));

  return (
    <div style={{ position: "relative", marginTop: "40px" }}>
      <Header>
        <div>
          <h3>Today's</h3>
          <h1>Quick View</h1>
        </div>
        <Countdown>
          <CountdownItem>
            <span>03</span>
            <small>Days</small>
          </CountdownItem>
          <CountdownItem>
            <span>23</span>
            <small>Hours</small>
          </CountdownItem>
          <CountdownItem>
            <span>19</span>
            <small>Minutes</small>
          </CountdownItem>
          <CountdownItem>
            <span>56</span>
            <small>Seconds</small>
          </CountdownItem>
          <ArrowButtons
            scrollLeft={() => ref.current.scrollLeft()}
            scrollRight={() => ref.current.scrollRight()}
          />
        </Countdown>
      </Header>
      <StyledProductGrid ref={gridRef}>
        {products.map((product) => {
          const isFavorite =
            favorites &&
            favorites.length > 0 &&
            favorites.some((fav) => fav._id === product._id)
              ? true
              : false;
          return (
            <ProductCart
              key={product._id}
              product={product}
              favorited={isFavorite}
            />
          );
        })}
      </StyledProductGrid>
    </div>
  );
});

export default React.memo(ProductGrid);
