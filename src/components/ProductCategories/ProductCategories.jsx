import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../../util/format";

function handleCategorySelection(e) {
  const selectedCategory = e.target.innerText;
  console.log(selectedCategory);
}

const ProductCategoriesContainer = styled.div`
  display: inline-block;
  text-align: left;
  margin: 0 0 15px 0;
  .category-box {
    display: inline-block;
    background: #f2f0fd;
    color: #1ea4ce;
    padding: 6px 10px;
    border-radius: 2px;
    margin-right: 10px;
    cursor: pointer;
  }
  .category-box.active {
    color: #f2f0fd;
    background: #1ea4ce;
  }
`;

function ProductCategories() {
  const [products, setProducts] = useState([]);

  return (
    <ProductCategoriesContainer>
      <div className="category-box active" onClick={handleCategorySelection}>
        mug
      </div>
      <div className="category-box" onClick={handleCategorySelection}>
        shirt
      </div>
    </ProductCategoriesContainer>
  );
}

export default ProductCategories;
