import React, { useRef, useImperativeHandle, useEffect, useState } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";
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
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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

  useEffect(() => {
    const targetDate = new Date("2024-12-26T23:59:59+07:00");
    const updateRemainingTime = () => {
      const now = new Date();
      const zonedNow = toZonedTime(now, "Asia/Ho_Chi_Minh");
      const days = differenceInDays(targetDate, now);
      const hours = differenceInHours(targetDate, now) % 24;
      const minutes = differenceInMinutes(targetDate, now) % 60;
      const seconds = differenceInSeconds(targetDate, now) % 60;
      setRemainingTime({ days, hours, minutes, seconds });
    };

    updateRemainingTime();
    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div style={{ position: "relative", marginTop: "40px" }}>
      <Header>
        <div>
          <h3>Today's</h3>
          <h1>Quick View</h1>
        </div>
        <Countdown>
          <CountdownItem>
            <span>{String(remainingTime.days).padStart(2, "0")}</span>
            <small>Days</small>
          </CountdownItem>
          <CountdownItem>
            <span>{String(remainingTime.hours).padStart(2, "0")}</span>
            <small>Hours</small>
          </CountdownItem>
          <CountdownItem>
            <span>{String(remainingTime.minutes).padStart(2, "0")}</span>
            <small>Minutes</small>
          </CountdownItem>
          <CountdownItem>
            <span>{String(remainingTime.seconds).padStart(2, "0")}</span>
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
