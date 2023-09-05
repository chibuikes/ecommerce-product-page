import React  from 'react'
import Close from './icon-close.svg'
import classes from './Menu.module.css'


const Menu =(props)=>{
    const close=(a)=>{
     
    props.close(false)
      }
    return <React.Fragment>
        {props.open?  <div >
          <div className={classes.section} onClick={close}></div>
          <ul className={classes.ulm}>
            <img src={Close}  onClick={close} alt='close'/>
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
          </div>:''}
    </React.Fragment>
}
export default Menu