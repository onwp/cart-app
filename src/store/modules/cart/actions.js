export function addToCartRequest(slug) {
  return {
    type: "@cart/ADD_REQUEST",
    slug,
  };
}

export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESS",
    product,
  };
}

export function updateAmountRequest(slug, amount) {
  if (amount === 0) {
    return {
      type: "@cart/REMOVE",
      slug,
    };
  }
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    slug,
    amount,
  };
}

export function updateAmountSucess(slug, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCESS",
    slug,
    amount,
  };
}

export function removeFromCart(slug) {
  return {
    type: "@cart/REMOVE",
    slug,
  };
}
