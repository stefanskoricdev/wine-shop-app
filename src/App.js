import { useState } from "react";
import Header from "./components/Header/Header";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import WineList from "./components/WineList/WineList";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Cart from "./components/Cart/Cart";
import styles from "./App.module.scss";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartBtnClicked, setCartBtnClicked] = useState(false);

  const cartBtnClickHandler = () => {
    setCartBtnClicked((prevBtnClickedState) => !prevBtnClickedState);
  };

  const closeBackdropHandler = (e) => {
    if (
      e.target.id === "Backdrop" ||
      e.target.id === "close-modal" ||
      e.target.id === "resetCart"
    ) {
      setCartBtnClicked(false);
    }
  };

  return (
    <CartProvider>
      <div className="App">
        <Backdrop
          cartBtnIsClicked={cartBtnClicked}
          closeBackdropHandler={closeBackdropHandler}
        >
          <Cart handleCloseBackdrop={closeBackdropHandler} />
        </Backdrop>
        <Header cartBtnClicked={cartBtnClickHandler} />
        <main className={styles.Main}>
          <WelcomeCard />
          <WineList />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
