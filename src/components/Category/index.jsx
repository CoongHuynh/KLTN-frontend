import React from "react";
import {
  SidebarContainer,
  Section,
  SectionHeader,
  FilterOption,
  FilterGroup,
  PriceInput,
  PriceRange,
} from "./styles"; // Import các styled components từ file style

const FilterSidebar = () => {
  return (
    <SidebarContainer>
      {/* Bộ lọc tìm kiếm */}
      <Section>
        <SectionHeader>Bộ lọc tìm kiếm</SectionHeader>

        {/* Hãng sản xuất */}
        <FilterGroup>
          <h3>Hãng sản xuất</h3>
          <div className="options">
            <FilterOption>Samsung</FilterOption>
            <FilterOption>Asus</FilterOption>
            <FilterOption>Acer</FilterOption>
            <FilterOption>Dell</FilterOption>
            <FilterOption>MSI</FilterOption>
            <FilterOption>HP</FilterOption>
          </div>
          <a href="#" className="view-more">
            Xem thêm
          </a>
        </FilterGroup>

        {/* Mức giá */}
        <FilterGroup>
          <h3>Mức giá</h3>
          <div className="options">
            <FilterOption>Tất cả</FilterOption>
            <FilterOption>Dưới 3 triệu</FilterOption>
            <FilterOption>Từ 3 - 5 triệu</FilterOption>
            <FilterOption>Từ 5 - 7 triệu</FilterOption>
            <FilterOption>Từ 7 - 10 triệu</FilterOption>
          </div>
          <p>Hoặc nhập khoảng giá phù hợp với bạn:</p>
          <PriceInput>
            <input type="text" value="1.749.000₫" readOnly />
            <span>~</span>
            <input type="text" value="8.833.000₫" readOnly />
          </PriceInput>
          <PriceRange>
            <input type="range" min="0" max="10000000" step="500000" />
          </PriceRange>
        </FilterGroup>

        {/* Nhu cầu sử dụng */}
        <FilterGroup>
          <h3>Nhu cầu sử dụng</h3>
          <div className="options">
            <FilterOption>Tất cả</FilterOption>
            <FilterOption>Gaming</FilterOption>
            <FilterOption>Văn phòng</FilterOption>
            <FilterOption>Đồ họa</FilterOption>
          </div>
        </FilterGroup>

        {/* Tấm nền */}
        <FilterGroup>
          <h3>Tấm nền</h3>
          <div className="options">
            <FilterOption>Tất cả</FilterOption>
            <FilterOption>IPS</FilterOption>
            <FilterOption>VA</FilterOption>
            <FilterOption>TN</FilterOption>
          </div>
        </FilterGroup>

        {/* Độ phân giải */}
        <FilterGroup>
          <h3>Độ phân giải</h3>
          <div className="options">
            <FilterOption>FHD</FilterOption>
            <FilterOption>UHD</FilterOption>
            <FilterOption>4K</FilterOption>
          </div>
        </FilterGroup>
      </Section>
    </SidebarContainer>
  );
};

export default FilterSidebar;
