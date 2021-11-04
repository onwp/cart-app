import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../util/format";
import { ShoppingFilled } from "@ant-design/icons";
const NavbarCartContainer = styled.div`
  align-items: center;
  justify-content: center;
  min-width: 107px;
  height: 100%;
  background: #147594;
  float: right;
  max-height: 76.64px;
`;
const CartTotalPriceText = styled.span`
  margin-left: 10px;
`;
function NavbarCart() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  return (
    <NavbarCartContainer>
      <ShoppingFilled />
      <CartTotalPriceText>{total}</CartTotalPriceText>
    </NavbarCartContainer>
  );
}

export default NavbarCart;
