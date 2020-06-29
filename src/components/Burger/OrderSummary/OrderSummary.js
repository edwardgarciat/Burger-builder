import React, { Component } from "react";

import Aux from "../../../hoc/Auxility";
import Button from "../../UI/Button/Button";
// this can be a funtional component does not have to be a class

class OrderSummary extends Component {
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p> A delicious Burger with the following ingredients</p>

        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
