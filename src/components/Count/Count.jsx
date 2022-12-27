import React from "react";
import "./style.scss";

const Count = ({count, increase, id, decrease, changeValue}) => {
  return (
    <div>
      <div className="count">
        <div className="count__box">
          <input
            onChange = {(e)=>{changeValue(id, +e.target.value)}}
            type="number"
            className="count__input"
            min="1"
            max="100"
            value={count}
          />
        </div>
        <div className="count__controls">
          <button type="button" className="count__up" onClick={()=>{increase(id)} }>
            <img src="./img/icons/icon-up.svg" alt="Increase"></img>
          </button>
          <button type="button" className="count__down">
            <img src="./img/icons/icon-down.svg" alt="Decrease" onClick={()=>{ decrease(id) }}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
