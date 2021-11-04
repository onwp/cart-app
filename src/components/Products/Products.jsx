import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";
import styled from "styled-components";
import ProductItem from "../ProductItem/ProductItem";
import api from "../../services/connection";
import { Link, useParams } from "react-router-dom";
import ProductCategories from "../ProductCategories/ProductCategories";
const ProductsSection = styled.div`
  display: block;
  max-width: 608px;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    margin: 0 20px;
  }
`;

const ProductsSectionTitle = styled.p`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
  color: #6f6f6f;
`;

const ProductsContainer = styled.div`
  background: #fff;
  padding: 5px;
  border-radius: 2px;
  display: inline-block;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 30px auto;

  a {
    display: inline-block;
    min-width: 32px;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    text-align: center;
    color: #697488;
    border-radius: 2px;
    font-weight: 600;
  }
  a.active {
    background: #1ea4ce;
    color: #fff;
  }
  .prev-link {
    margin-right: 30px;
  }
  .next-link {
    margin-left: 30px;
  }
`;
const LoadingIndicator = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  margin: 10px;
`;
function Products() {
  const params = useParams();
  const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
  const [pageState, setPageState] = useState({
    count: undefined,
    limit: undefined,
    next: "",
    previous: "",
    start: undefined,
    results: [],
  });

  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState();

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const limit = 16;
    async function loadProducts() {
      const response = await api.get(
        `items?_page=${pageNumber}&_limit=${limit}`
      );

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, [productCategory, pageNumber]);

  const hasPrevious = pageNumber > 1;
  const hasNext = !!pageState.next;

  function handleAddProduct(slug) {
    dispatch(CartActions.addToCartRequest(slug));
  }

  return (
    <ProductsSection>
      <ProductsSectionTitle>Products</ProductsSectionTitle>
      <ProductCategories />
      <ProductsContainer>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <ProductItem
                key={product.slug}
                slug={product.slug}
                price={product.price}
                name={product.name}
                handleAddToCart={() => handleAddProduct(product.slug)}
              />
            ))}
          </>
        ) : (
          <LoadingIndicator>Loading...</LoadingIndicator>
        )}
      </ProductsContainer>
      <PaginationContainer>
        {hasPrevious && (
          <Link to={`/products/page/${pageNumber - 1}`} className="prev-link">
            ← Prev
          </Link>
        )}
        <Link
          to={`/products/page/1}`}
          className={pageNumber === 1 ? "active" : ""}
        >
          1
        </Link>
        <Link
          to={`/products/page/2}`}
          className={pageNumber === 2 ? "active" : ""}
        >
          2
        </Link>
        <Link
          to={`/products/page/3}`}
          className={pageNumber === 3 ? "active" : ""}
        >
          3
        </Link>
        <Link
          to={`/products/page/4}`}
          className={pageNumber === 4 ? "active" : ""}
        >
          4
        </Link>
        <Link to={`/products/page/4}`}>...</Link>
        <Link
          to={`/products/page/17}`}
          className={pageNumber === 17 ? "active" : ""}
        >
          17
        </Link>
        <Link
          to={`/products/page/18`}
          className={pageNumber === 18 ? "active" : ""}
        >
          18
        </Link>
        <Link
          to={`/products/page/19`}
          className={pageNumber === 19 ? "active" : ""}
        >
          19
        </Link>
        <Link
          to={`/products/page/20`}
          className={pageNumber === 20 ? "active" : ""}
        >
          20
        </Link>
        <Link to={`/products/page/${pageNumber + 1}`} className="next-link">
          Next →
        </Link>
      </PaginationContainer>
    </ProductsSection>
  );
}

export default Products;
