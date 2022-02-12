import React from "react";
import "../styles/ProductItem.css";

function ProductItem(props) {
  const { product } = props;
  return (
    <div className="mainItem">
      <div className="productsTop">

          <div className="imgDiv">
            <img src={product.image} alt="productImage" />
          </div>
          <div className="location">
          {product.address.city + "," + product.address.state}
        </div>


          <div className="prodname">{product.product_name}</div>
          <div className="branchname">{product.brand_name}</div>
          <div className="cost">$ {product.price}</div>
          <div className="date">
          Date:
          <span className="dateSpan">
            {new Date(product.date).getDay() +
              ":" +
              new Date(product.date).getMonth() +
              ":" +
              new Date(product.date).getFullYear()}
          </span>
        </div>
        <div className="desc">{product.discription}</div>
      </div>

      
    </div>
  );
}

export default ProductItem;
