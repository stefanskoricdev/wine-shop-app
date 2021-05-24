import styles from "./Cart.module.scss";
import { useContext } from "react";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cartContext";

const Cart = () => {
  const ctx = useContext(CartContext);
  const { wines: winesList, changeAmmount } = ctx;
  const cartItemsList = winesList.map((item, i) => (
    <CartItem
      key={Math.random() + i}
      id={i}
      title={item.title}
      details={item.details}
      price={item.price}
      ammount={item.ammount}
      changeAmmount={changeAmmount}
    />
  ));
  const total = winesList
    .map((wine) => wine.ammount * parseFloat(wine.price, 10))
    .reduce((accumulator, currValue) => {
      return accumulator + currValue;
    }, 0);

  const hasItems = winesList.length > 0;

  return (
    <div className={styles.Cart}>
      <ul>{cartItemsList}</ul>
      <footer>
        <p>
          TOTAL: <span>{`$${total.toFixed(2)}`}</span>
        </p>
        <button id="close-modal">CLOSE</button>
        <button className={!hasItems ? styles.Inactive : null}>ORDER</button>
      </footer>
    </div>
  );
};

export default Cart;
