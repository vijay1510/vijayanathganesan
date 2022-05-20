import { AllProducts } from "./Allqueries";

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
