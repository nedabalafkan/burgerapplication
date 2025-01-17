import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
   


];

const buildControls = (props) => (
    <div className={'BuildControls'}>
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(crtl => (
            <BuildControl 
            key={crtl.label} 
            label={crtl.label}
            ingredientAdded={() => props.ingredientAdded(crtl.type)} 
            ingredientRemoved={() => props.ingredientRemoved(crtl.type)}
            disabledInfo={props.disabled[crtl.type]}/>
        ))}
        <button className={'OrderButton'}
        disabled = {!props.purchasable}
        onClick={props.ordered}>Order Now</button>


    </div>

);

export default buildControls;