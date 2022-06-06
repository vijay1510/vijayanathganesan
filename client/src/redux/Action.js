import { AllProducts, productDetails, currencyInfo } from "./Allqueries";

//get all products

export const getAllProducts = () => {
  return async (dispatch, getState) => {
    try {
      const allproduct = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: AllProducts,
        }),
      });
      const allproductJson = await allproduct.json();
      dispatch(allProducts(allproductJson.data.categories));
    } catch (error) {
      console.log(error);
    }
  };
};

export const allProducts = (data) => {
  return {
    type: "ALL_PRODUCTS",
    payload: data,
  };
};

//-------------------------------------------------------------------------

//filter products
export const filterProducts = (data) => {
  return {
    type: "FILTERED",
    payload: data,
  };
};

//--------------------------------------------------------------

//getProductDetails
export const getDetails = (detail) => {
  return async (dispatch, getState) => {
    try {
      const details = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: productDetails,
          variables: { id: detail },
        }),
      });
      const detaislJson = await details.json();

      dispatch(allDetails(detaislJson.data.product));
    } catch (error) {
      console.log(error);
    }
  };
};

export const allDetails = (data) => {
  return {
    type: "PRODUCTS_DETAILS",
    payload: data,
  };
};
//---------------------------------------------------------------------------------------

//getcurrency details

export const getCurrency = () => {
  return async (dispatch, getState) => {
    try {
      const currency = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: currencyInfo,
        }),
      });
      const currencyJson = await currency.json();
      dispatch(currencyState(currencyJson.data.currencies));
    } catch (error) {
      console.log(error);
    }
  };
};

export const currencyState = (data) => {
  return {
    type: "CURRENCY_DETAILS",
    payload: data,
  };
};

//-----------------------------------------------------------------------------

//symbol

export const symbolChange = (data) => {
  return {
    type: "SYMBOL_CHANGE",
    payload: data,
  };
};

//---------------------------------------------------------------------

//Add to cart

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

//-------------------------------------------------------------------------

//selecting attribute
export const att = (data) => {
  return {
    type: "ATTRIBUTE",
    payload: data,
  };
};
