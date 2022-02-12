import { FILTER_CITY, FILTER_PROD, FILTER_STATE } from "./filtersTypes";

export const getFilterProducts = (list) => {
  let allProducts = [];

  list.forEach((element) => {
    if (!allProducts.includes(element.product_name)) {
      allProducts.push(element.product_name);
    }
  });
  console.log('f list',list);
  console.log('res',allProducts);

  return {
    type: FILTER_PROD,
    payload: allProducts,
  };
};

export const getFilterStates = (list, selectedProd) => {
  let allStates = [];

  list.forEach((element) => {
    if (
      !allStates.includes(element.address.state) &&
      (selectedProd === "" || selectedProd === element.product_name)
    ) {
      allStates.push(element.address.state);
    }
  });

  return {
    type: FILTER_STATE,
    payload: allStates,
  };
};

export const getFilterCities = (list, selectedProd, selectedState) => {
  let allCities = [];

  list.forEach((element) => {
    if (
      !allCities.includes(element.address.city) &&
      (selectedProd === "" || selectedProd === element.product_name) &&
      (selectedState === "" || selectedState === element.address.state)
    ) {
      allCities.push(element.address.city);
    }
  });

  return {
    type: FILTER_CITY,
    payload: allCities,
  };
};