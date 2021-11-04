import styled from "styled-components";
const ProductItemContainer = styled.div`
  display: inline-block;
  width: 25%;
  max-width: 25%;
  padding: 12px;
  @media only screen and (max-width: 480px) {
    width: 50%;
    max-width: 50%;
  }
`;
const ProductImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  border: 1.5px solid #f3f0fe;
  border-radius: 12px;
`;
const ProductImage = styled.img`
  width: 124px;
  height: auto;
  max-width: 100%;
  padding: 15px;
`;
const ProductPrice = styled.p`
  &:before {
    content: "₺";
    font-weight: 500;
    margin-right: 5px;
  }
  color: #1ea4ce;
  padding-top: 5px;
  font-weight: 700;
`;
const ProductName = styled.p`
  color: #191919;
  font-weight: 600;
  padding-bottom: 10px;
  height: 49px;
`;
const ProductAddButton = styled.button`
  width: 100%;
  border: none;
  background: #1ea4ce;
  height: 22px;
  color: #fff;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 500;
`;
function ProductItem(props) {
  return (
    <ProductItemContainer>
      <ProductImageContainer>
        {/* <ProductImage src={props.imageUrl}/> */}
        <ProductImage src="https://loremflickr.com/124/124/coffee+cup" />
      </ProductImageContainer>
      <ProductPrice>{props.price}</ProductPrice>
      <ProductName>{props.name}</ProductName>
      <ProductAddButton onClick={() => props.handleAddToCart()}>
        Add
      </ProductAddButton>
    </ProductItemContainer>
  );
}
export default ProductItem;
