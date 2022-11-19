//this component is made to wrap all the elements that posses same border and box shadow style

import './Cards.css'

const Cards=(props)=>{
    const classes='card '+props.className;
    return (
        //props.children => is a special prop key that helps in wraping its children inside it
        <div className={classes}>{props.children}</div>
    )
}

export default Cards;