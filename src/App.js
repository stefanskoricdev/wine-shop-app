import { useState, useReducer, useEffect } from "react";
import Header from "./components/Header/Header";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import WineList from "./components/WineList/WineList";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cartContext";
import styles from "./App.module.scss";

const initialState = {
  wines: [],
  totalAmmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const matchedItemIndex = state.wines.findIndex(
        (wine) => wine.id === action.payload.id
      );
      const matchedItem = state.wines[matchedItemIndex];
      let updatedItems;
      if (matchedItem) {
        const updatedItem = {
          ...matchedItem,
          ammount: matchedItem.ammount + action.payload.ammount,
        };
        updatedItems = [...state.wines];
        updatedItems[matchedItemIndex] = updatedItem;
      } else {
        updatedItems = [
          ...state.wines,
          {
            id: action.payload.id,
            title: action.payload.title,
            details: action.payload.details,
            price: action.payload.price,
            ammount: action.payload.ammount,
          },
        ];
      }
      return {
        ...state,
        wines: updatedItems,
      };
    case "TOTAL_AMMOUNT":
      return {
        ...state,
        totalAmmount: action.payload,
      };
    default:
      return state;
  }
};
function App() {
  const [cartBtnClicked, setCartBtnClicked] = useState(false);
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  /* console.log(
    cartState.wines
      .map((wine) => wine.ammount)
      .reduce((accumulator, currValue) => {
        return accumulator + currValue;
      }, 0)
  ); */

  useEffect(() => {
    dispatchCart({
      type: "TOTAL_AMMOUNT",
      payload: cartState.wines
        .map((wine) => wine.ammount)
        .reduce((accumulator, currValue) => {
          return accumulator + currValue;
        }, 0),
    });
  }, [cartState.wines]);

  const cartBtnClickHandler = () => {
    setCartBtnClicked(!cartBtnClicked);
    console.log("cartBtnClicked");
  };
  const closeBackdropHandler = (e) => {
    if (e.target.id === "Backdrop" || e.target.id === "close-modal") {
      setCartBtnClicked(false);
    }
  };

  const addWineToCartHandler = (item) => {
    dispatchCart({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  return (
    <CartContext.Provider
      value={{
        isClicked: cartBtnClicked,
        cartBtnClickHandler,
        addWineToCartHandler,
        wines: cartState.wines,
        totalAmmount: cartState.totalAmmount,
      }}
    >
      <div className="App">
        <Backdrop
          cartBtnIsClicked={cartBtnClicked}
          closeBackdropHandler={closeBackdropHandler}
        >
          <Cart />
        </Backdrop>
        <Header />
        <main className={styles.Main}>
          <WelcomeCard />
          <WineList />
        </main>
      </div>
    </CartContext.Provider>
  );
}

export default App;
