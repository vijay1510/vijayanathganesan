const initialState = {
  first: null,
  allProducts: null,
  filtered: null,
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

    default:
      return state;
  }
};
