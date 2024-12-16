import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ArrowButton, LeftArrowButton, RightArrowButton } from "./style";

const ArrowButtons = ({ scrollLeft, scrollRight }) => (
  <ArrowButton>
    <LeftArrowButton onClick={scrollLeft}>
      <FaArrowLeft />
    </LeftArrowButton>
    <RightArrowButton onClick={scrollRight}>
      <FaArrowRight />
    </RightArrowButton>
  </ArrowButton>
);

export default React.memo(ArrowButtons);
