import React, { useState} from "react";
import ImageT1 from "./image-product-1-thumbnail.jpg";
import ImageT2 from "./image-product-2-thumbnail.jpg";
import ImageT3 from "./image-product-3-thumbnail.jpg";
import ImageT4 from "./image-product-4-thumbnail.jpg";
import Image1 from "./image-product-1.jpg";
import Image2 from "./image-product-2.jpg";
import Image3 from "./image-product-3.jpg";
import Image4 from "./image-product-4.jpg";
import classes from "./Overlay.module.css";
import Next from "./icon-next.svg";
import Previous from "./icon-previous.svg";
import Close from "./icon-close.svg";
const Overlay = (props) => {
  const [val, setVal] = useState(0);
  const arr = [Image1, Image2, Image3, Image4];
  const mage = arr[val];
  const clickHandler1 = () => {
    setVal(0);
  };
  const clickHandler2 = () => {
    setVal(1);
  };
  const clickHandler3 = () => {
    setVal(2);
  };
  const clickHandler4 = () => {
    setVal(3);
  };
  const next = () => {
    if (val < 3) {
      setVal((val) => {
        return val + 1;
      });
    } else {
      return;
    }
  };

  const previous = () => {
    if (val > 0) {
      setVal((val) => {
        return val - 1;
      });
    } else {
      return;
    }
  };
  const close = () => {
   
      props.fun('none')
  
  };
  return (
    <React.Fragment>
      <section
        className={props.dis==='block' ? `${classes.display}` : `${classes.none}`}
      >
        <div className={classes.section} onClick={close}></div>
        <div className={classes.div}>
          <img
            src={Close}
            alt="close"
            onClick={close}
            className={classes.close}
          />
          <div className={classes.div1}>
            <img
              src={Previous}
              className={classes.previous}
              onClick={previous}
              alt="previous"
            />{" "}
            <img src={mage} className={classes.img1} alt="product1" />{" "}
            <img
              src={Next}
              onClick={next}
              alt="next button"
              className={classes.next}
            />
          </div>
          <div className={classes.div2}>
            <img
              src={ImageT1}
              onClick={clickHandler1}
              className={val === 0 ? `${classes.imgActive}` : `${classes.img}`}
              alt="product-1-thumbnail"
            />
            <img
              src={ImageT2}
              onClick={clickHandler2}
              className={val === 1 ? `${classes.imgActive}` : `${classes.img}`}
              alt="product-2-thumbnail"
            />
            <img
              src={ImageT3}
              onClick={clickHandler3}
              className={val === 2 ? `${classes.imgActive}` : `${classes.img}`}
              alt="product-3-thumbnail"
            />
            <img
              src={ImageT4}
              onClick={clickHandler4}
              className={val === 3 ? `${classes.imgActive}` : `${classes.img}`}
              alt="product-4-thumbnail"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Overlay;
