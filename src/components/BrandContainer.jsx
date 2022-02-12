import React from "react";
import "../styles/Filter.css";
import "../styles/Product.css";
import ProductItem from "./ProductItem";
import { IoIosArrowForward } from "react-icons/io";

function BrandContainer(props) {
  const { items, productName, st, city } = props;
  return items.filter(
    (i) =>
      (st === "" || i.address.state === st) &&
      (city === "" || i.address.city === city)
  )?.length > 0 ? (
    <div>
      <h3 className="productName">{productName}</h3>
      <hr className="hrFilter" style={{ width: "90%", marginLeft: 0 }} />
      <div className="mainContainerProd2">
        <div className="productsBox">
          <div className="leftArrowDiv"></div>
          {items
            .filter(
              (i) =>
                (st === "" || i.address.state === st) &&
                (city === "" || i.address.city === city)
            )
            .map((item, index) => {
              return (
                <div>
                  <ProductItem key={item.product_name + index} product={item} />
                </div>
              );
            })}
        </div>
        <div style={{ margin: "auto" }}>
          <IoIosArrowForward className="arrowStyle" size={40} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default BrandContainer;
