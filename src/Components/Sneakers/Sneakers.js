import React,{useState} from 'react'
import classes from './Sneakers.module.css'
import Cart from '../Cart/Cart'
import Image1 from './image-product-1.jpg'
import Image2 from './image-product-2.jpg'
import Image3 from './image-product-3.jpg'
import Image4 from './image-product-4.jpg'
import Next from './icon-next.svg'
import Previous from './icon-previous.svg'
const Sneakers=()=>{
    const arr=[Image1, Image2,Image3,Image4]
    const [index, setIndex]= useState(0)
    const next = () => {
        if (index< 3) {
          setIndex((index) => {
            return index + 1;
          });
        } else {
          return;
        }
      };
    
      const previous = () => {
        if (index > 0) {
          setIndex((index) => {
            return index - 1;
          });
        } else {
          return;
        }
      };
    return (
        <React.Fragment >
           
            <section className={classes.flex}>
            <div className={classes.love}>
               <img src={Previous} onClick={previous} className={classes.pre} alt='previous'/> <img src={arr[index]} className={classes.mobile} alt='product-1'/> <img src={Next}  className={classes.nex} onClick={next}  alt='next'/> 
            </div>
             <div className={classes.div}>
                 <p className={classes.p1}> SNEAKER COMPANY</p>
                 <p className={classes.p2}> Fall Limited Edition Sneakers</p>
                 <p className={classes.p3}>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                 </p>
             </div>
             <Cart/>
             </section>
             
        </React.Fragment>
    )
}
export default Sneakers