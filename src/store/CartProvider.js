import CartContext from "./cartContext";
import { useReducer, useEffect } from "react";
import { add } from "../actions/actions";

const initialState = {
  wines: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const matchedItemIndex = state.wines.findIndex(
        (wine) => wine.id === action.payload.id
      );
      const matchedItem = state.wines[matchedItemIndex];
      let updatedItems;
      if (matchedItem) {
        const updatedItem = {
          ...matchedItem,
          amount: matchedItem.amount + action.payload.amount,
        };
        updatedItems = [...state.wines];
        updatedItems[matchedItemIndex] = updatedItem;
      } // If there is allready same item in cart only update ammount
      else {
        updatedItems = [
          ...state.wines,
          {
            id: action.payload.id,
            title: action.payload.title,
            details: action.payload.details,
            price: action.payload.price,
            amount: action.payload.amount,
          },
        ];
      }

      return {
        ...state,
        wines: updatedItems,
      };
    }
    case "UPDATE_AMOUNT": {
      const targetedItemIndex = state.wines.findIndex(
        (_, i) => i === action.payload
      );
      const targetedItem = state.wines[targetedItemIndex];
      let updatedItem;
      if (action.btnType === "increaseBtn") {
        updatedItem = {
          ...targetedItem,
          amount: targetedItem.amount + 1,
        }; // If increase btn was clicked increase the amount
      } else {
        updatedItem = {
          ...targetedItem,
          amount: targetedItem.amount - 1,
        }; //If decrease btn was clicked decrease the amount
      }
      let updatedItems = [...state.wines];
      if (targetedItem.amount === 1 && action.btnType !== "increaseBtn") {
        updatedItems.splice(targetedItemIndex, 1);
        // Removes item from cart if there is no amount
      } else {
        updatedItems[targetedItemIndex] = updatedItem;
      }

      return {
        ...state,
        wines: updatedItems,
      };
    }

    case "TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: action.payload,
      };
    case "CLEAR_CART": {
      return initialState;
    }
    default:
      return initialState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatchCart({
      type: "TOTAL_AMOUNT",
      payload: cartState.wines
        .map((wine) => wine.amount)
        .reduce((accumulator, currValue) => {
          return accumulator + currValue;
        }, 0),
    });
  }, [cartState.wines]);

  const addWineToCartHandler = (item) => {
    dispatchCart(add("ADD_ITEM", item));
  };

  const changeAmount = (e, type, btn) => {
    const targetedBtn = parseInt(e.target.getAttribute("data-handler"), 10);
    dispatchCart({
      type: type,
      payload: targetedBtn,
      btnType: btn,
    });
  };

  const clearCart = () => {
    dispatchCart({
      type: "CLEAR_CART",
    });
  };

  const cartContext = {
    addWineToCartHandler,
    wines: cartState.wines,
    totalAmount: cartState.totalAmount,
    changeAmount,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
