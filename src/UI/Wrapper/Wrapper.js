import classes from './Wrapper.module.css'
import React from 'react'
const Wrapper=(props)=>{
    return (
        <React.Fragment>
<div className={classes.div}> {props.children}</div>
        </React.Fragment>
    )
}
export default Wrapper