import React from "react";
import priceFormater from "../../utils/priceFormater";
import "./style.scss";

const CarFooter = ({total}) => {
  const {count,price} = total;
 
  return (
    <div>
      <footer className="cart-footer">
        <div className="cart-footer__count">{count} шт.</div>
        <div className="cart-footer__price">{priceFormater(price)} руб.</div>
      </footer>
    </div>
  );
};

export default CarFooter;
