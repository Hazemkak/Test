import React from "react";
import "../styles/Filter.css";
import Dropdown from "./Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { getFilterCities, getFilterStates } from "../store";

function Filter(props) {
  const selector = useSelector((state) => state.filter);
  const selectorProd = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleProduct = (prod) => {
    props.setProd(prod);
    dispatch(getFilterStates(selectorProd.arrProducts, prod));
    dispatch(getFilterCities(selectorProd.arrProducts, prod, props.st));
  };

  const handleState = (st) => {
    props.setSt(st);
    dispatch(getFilterCities(selectorProd.arrProducts, props.prod, st));
  };

  const handleCity = (city) => {
    props.setCity(city);
  };

  return (
    <div className="mainContainerFilter">
      <h3 className="titleFilter">Filters</h3>
      <hr className="hrFilter" />
      <Dropdown
        handle={handleProduct}
        items={selector.product}
        type={"Products"}
      />
      <Dropdown handle={handleState} items={selector.state} type={"State"} />
      <Dropdown handle={handleCity} items={selector.city} type={"City"} />
    </div>
  );
}

export default Filter;
