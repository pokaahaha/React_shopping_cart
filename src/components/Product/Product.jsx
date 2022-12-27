import React from "react";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import Count from "../Count/Count";
import "./style.scss";
import priceFormater from "../../utils/priceFormater";

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <div>
      <section className="product">
        <div className="product__img">
          <img src={`./img/products/${img}`} alt={title} />
        </div>
        <div className="product__title">{title}</div>
        <div className="product__count">
          <Count
            count={count}
            increase={increase}
            decrease={decrease}
            changeValue={changeValue}
            id={id}
          />
        </div>
        <div className="product__price">
        {priceFormater(priceTotal)} руб.
        </div>
        <div className="product__controls">
          <ButtonDelete deleteProduct={deleteProduct} id={id} />
        </div>
      </section>
    </div>
  );
};

export default Product;
