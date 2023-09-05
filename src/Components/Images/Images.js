import React, {useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import ImageT1 from './image-product-1-thumbnail.jpg'
import ImageT2 from './image-product-2-thumbnail.jpg'
import ImageT3 from './image-product-3-thumbnail.jpg'
import ImageT4 from './image-product-4-thumbnail.jpg'
import Image1 from './image-product-1.jpg'
import Image2 from './image-product-2.jpg'
import Image3 from './image-product-3.jpg'
import Image4 from './image-product-4.jpg'
import classes from './Images.module.css'
import AuthContext from '../../Store/auth-context'
import Overlay from '../Overlay/Overlay'
const Images=()=>{
    const ctx= useContext(AuthContext)
    const [val, setVal]=useState(0)
    const arr=[ Image1, Image2, Image3,Image4]
    const mage= arr[val]
    const [dis , setDis]= useState('none')
    const clickHandler1=()=>{
        setVal(0)
        ctx.va= 0
    }
    const clickHandler2=()=>{
        setVal(1)
        ctx.va= 1

    }
    const clickHandler3=()=>{
        setVal(2)
        ctx.va= 2

    }
    const clickHandler4=()=>{
        setVal(3)
        ctx.va=3
  
    }
    const display=()=>{
        ctx.display='block'
        setDis(ctx.display)
    console.log(ctx)

    }
    function fun(a){
        setDis(a)
    }
    return(
        <React.Fragment>
            {
                ReactDOM.createPortal(<Overlay dis={dis}  fun={fun}/>, document.getElementById('rooty'))
            }
<div className={classes.div}>
    <div className={classes.div1}> 
        <img src={mage} className={classes.img1} alt='product1' onClick={display}/>
    </div>
    <div className={classes.div2}>
    <img src={ImageT1} onClick={clickHandler1} className={ val===0?`${classes.imgActive}`:`${classes.img}`} alt='product-1-thumbnail'/>
        <img src={ImageT2}  onClick={clickHandler2}className={ val===1?`${classes.imgActive}`:`${classes.img}`} alt='product-2-thumbnail'/>
        <img src={ImageT3} onClick={clickHandler3} className={ val===2?`${classes.imgActive}`:`${classes.img}`} alt='product-3-thumbnail'/>
        <img src={ImageT4} onClick={clickHandler4} className={ val===3?`${classes.imgActive}`:`${classes.img}`} alt='product-4-thumbnail'/>
   </div>
</div>
        </React.Fragment>
    )
}
export default Images 