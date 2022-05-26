const initialState = {
  first: null,
  allProducts: null,
  filtered: null,
  details: null,
  currency: null,
  symbol: "$",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      return {
        ...state,
        allProducts: action.payload,
        first: action.payload.filter((e) => e.name === "all"),
      };
    }
    case "FILTERED": {
      return {
        ...state,
        filtered:
          state.allProducts &&
          state.allProducts.filter((e) => e.name === action.payload),
      };
    }
    case "PRODUCTS_DETAILS": {
      return {
        ...state,
        details: action.payload,
      };
    }
    case "CURRENCY_DETAILS": {
      return {
        ...state,
        currency: action.payload,
      };
    }
    case "SYMBOL_CHANGE": {
      return {
        ...state,
        symbol: action.payload,
      };
    }
    default:
      return state;
  }
};
