import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";

import styled from "styled-components";
const CartBoxContainer = styled.div`
  background: #fff;
  display: block;
  margin: 15px;
  padding: 30px 20px;
  min-width: 321.9px;
  width: auto;
  max-width: 100%;
  height: auto;
  border: 10px solid #1ea4ce;
  border-radius: 2px;
`;
const ProductName = styled.p`
  color: #191919;
  font-weight: 500;
  width: 120px;
  margin-right: 40px;
  margin-bottom: 5px;
`;
const ProductPrice = styled.p`
  color: #1ea4ce;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: #1ea4ce;
  font-weight: 600;
  background: #fff;
  border: none;
`;

const AmountInput = styled.input`
  border: none;
  width: 30px;
  height: 30px;
  text-align: center;
  background: #1ea4ce;
  color: #fff;
  font-weight: 600;
`;
const ProductRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #f4f4f4;
  margin-bottom: 10px;
`;
const TotalPrice = styled.tr`
  display: block;
  max-width: 100px;
  float: right;
  text-align: center;
  padding: 15px 20px;
  border: 4px solid #1ea4ce;
  border-radius: 2px;
  color: #1ea4ce;
  font-weight: 600;
`;

function CartBox() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.slug, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.slug, product.amount - 1));
  }

  return (
    <div>
      <CartBoxContainer>
        <table>
          <tbody>
            {cart.map((product) => (
              <ProductRow key={product.slug}>
                <td>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.subtotal}</ProductPrice>
                </td>
                <td>
                  <ActionButton
                    type="button"
                    onClick={() => decrement(product)}
                  >
                    -
                  </ActionButton>
                  <AmountInput readOnly value={product.amount} />
                  <ActionButton
                    type="button"
                    onClick={() => increment(product)}
                  >
                    +
                  </ActionButton>
                </td>
              </ProductRow>
            ))}
            {total !== "₺0,00" && (
              <TotalPrice>
                <td>{total}</td>
              </TotalPrice>
            )}
          </tbody>
        </table>
      </CartBoxContainer>
    </div>
  );
}

export default CartBox;
