import React, {  useState } from "react";
import classes from "./MainHeader.module.css";
import Logo from "./logo.svg";
import ReactDOM from 'react-dom'
import Avatar from "./image-avatar.png";
import Cart from "./icon-cart.svg";
import Men from './icon-menu.svg'
import Menu from "../Menu/Menu";
const MainHeader = (props) => {
  const [bo, setBo] = useState(true);
const [open , setOpen]= useState(false)

  const cart = (a) => {
    if (!bo) {
      setBo(true);
    } else if (bo) {
      setBo(false);
    }
    props.fun(bo);

  };

  const menu=()=>{
    setOpen(true)
  }
  const close=(a)=>{
    setOpen(a)
    console.log('open')
  }
  // delete, arr, deleteHandler
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Menu open={open}  close={close}/>, document.getElementById('rot')
        )
      }
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li>
              <img  src={Men} alt='menu' onClick={menu}  className={classes.ad}/>
            </li>
            <li>
              <img className={classes.img} src={Logo} alt="sneakers logo" />
            </li>
            <li>
              <span className={classes.a} >
                Collections
              </span>
            </li>
            <li>
              <span className={classes.a} >
                Men
              </span>
            </li>
            <li>
              <span className={classes.a} >
                Women
              </span>
            </li>
            <li>
              <span className={classes.a} >
                About
              </span>
            </li>
            <li>
              <span className={classes.a} >
                Contact
              </span>
            </li>
          </ul>
        
          <ul className={classes.ul}>
            <li className={classes.li}>
              {props.value === 0 ? (
                " "
              ) : (
                <div className={classes.cartpopup}>{props.value}</div>
              )}

              <img src={Cart} className={classes.cart} onClick={cart} alt="" />
            </li>
            <li>
              <img src={Avatar} className={classes.img1} alt="" />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};
export default MainHeader;
