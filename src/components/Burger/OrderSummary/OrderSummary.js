import React from "react";

import Aux from "../../../hoc/Auxility";
import Button from "../../UI/Button/Button";
// this can be a funtional component does not have to be a class

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p> A delicious Burger with the following ingredients</p>

      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price:{props.price}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
