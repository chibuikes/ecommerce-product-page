import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import Cartt from "./icon-cart.svg";
import Minus from "./icon-minus.svg";
import Plus from "./icon-plus.svg";
import ImageT1 from "./image-product-1-thumbnail.jpg";
import ImageT2 from "./image-product-2-thumbnail.jpg";
import ImageT3 from "./image-product-3-thumbnail.jpg";
import ImageT4 from "./image-product-4-thumbnail.jpg";
import Delete from "./icon-delete.svg";
import MainHeader from "../MainHeader/MainHeader";
import AuthContext from "../../Store/auth-context";
const Cart = () => {
  const ctx = useContext(AuthContext);
  const arr = [ImageT1, ImageT2, ImageT3, ImageT4];
  const [bool, setBool] = useState(false);
  const [val, setVal] = useState(ctx.para);
  const [value, setValue] = useState(0);

  const deleteHandler = () => {
    setValue(0);
  };
  const minus = () => {
    if (val > 0) {
      setVal((val) => {
        return (val = val - 1);
      });
      ctx.para = val;
    }
  };
  const plus = () => {
    if (val < 50) {
      setVal((val) => {
        return (val = val + 1);
      });

      ctx.para = val;
    }
  };

  const clickHandler = () => {
    setValue(val);
    console.log(ctx.value);
  };
  const fun = (a) => {
    setBool(a);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <MainHeader value={value} fun={fun} />,
        document.getElementById("rooty")
      )}
      <section className={classes.flex}>
        <section className={classes.sec}>
          <div className={classes.flex1}>
            <b className={classes.b}>$125.00</b>
            <p className={classes.p}>50%</p>
          </div>

          <div>
            <s className={classes.s}>$250.00</s>
          </div>
        </section>
        <div className={classes.flex2}>
          <div className={classes.div2}>
            <div>
              <img
                src={Minus}
                onClick={minus}
                alt="minus sign"
                className={classes.img1}
              />
            </div>
            {val}
            <div>
              <img
                src={Plus}
                className={classes.img1}
                onClick={plus}
                alt="addition< sign"
              />
            </div>{" "}
          </div>
          <button className={classes.button} onClick={clickHandler}>
            <img src={Cartt} alt="cart" className={classes.img2} /> Add to cart
          </button>
        </div>
      </section>
      <article className={bool ? `${classes.info}` : `${classes.none}`}>
        <div className={classes.info1}>Cart</div>

        {value === 0 ? (
          <div className={classes.center}> Your cart is empty.</div>
        ) : (
          <section>
            {" "}
            <div className={classes.flex3}>
              <img
                src={arr[ctx.va]}
                className={classes.imga}
                alt="product-sneaker"
              />
              <p className={classes.p1}>
                Fall Limited Edition Sneakers $125 x{value}
                {"  "}
                <b> ${125 * Number(value)}</b>
              </p>

              <img
                src={Delete}
                className={classes.imgb}
                onClick={deleteHandler}
                alt="delete"
              />
            </div>
            <button onClick={deleteHandler} className={classes.btn}>
              Checkout
            </button>
          </section>
        )}
      </article>
    </React.Fragment>
  );
};
export default Cart;
