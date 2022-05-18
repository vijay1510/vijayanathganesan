const initialState = {
  currency: null,
  allProducts: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      return {
        ...state,
        allProducts: action.payload,
      };
    }

    default:
      return state;
  }
};
