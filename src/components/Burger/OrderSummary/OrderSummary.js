import React from 'react';
import Aux from '../../../higherOrderComponent/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return(
            <li key={igKey}>
                <span style={{textTransfrom:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });
    return(
        <Aux>
            <h3> Order Summary</h3>
            <p> This burger has the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong> Total Price:{props.price.toFixed(2)}</strong></p>
            <p> Go to Check Out?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>

        </Aux>

    );


};
export default OrderSummary;