import styles from "./Cart.module.scss";
import { useContext, Fragment, useState } from "react";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cartContext";
import CartForm from "./CartForm/CartForm";

const Cart = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const ctx = useContext(CartContext);
  const { wines: winesList, changeAmount } = ctx;
  const cartItemsList = winesList.map((item, i) => (
    <CartItem
      key={Math.random() + i}
      id={i}
      title={item.title}
      details={item.details}
      price={item.price}
      amount={item.amount}
      changeAmount={changeAmount}
    />
  ));
  const total = winesList
    .map((wine) => wine.amount * parseFloat(wine.price, 10))
    .reduce((accumulator, currValue) => {
      return accumulator + currValue;
    }, 0);

  const hasItems = winesList.length > 0;

  const handleConfirmOrder = () => {
    setConfirmOrder(true);
  };

  const handleCancelConfirmOrder = () => {
    setConfirmOrder(false);
  };

  const cartModalActions = (
    <Fragment>
      <button id="close-modal">CLOSE</button>
      <button
        onClick={handleConfirmOrder}
        className={!hasItems ? styles.Inactive : null}
      >
        ORDER
      </button>
    </Fragment>
  );

  return (
    <div className={styles.Cart}>
      {!confirmOrder && <ul>{cartItemsList}</ul>}
      {confirmOrder && (
        <CartForm
          handleClose={props.handleCloseBackdrop}
          handleCancel={handleCancelConfirmOrder}
        />
      )}
      <footer>
        <p>
          TOTAL: <span>{`$${total.toFixed(2)}`}</span>
        </p>
        {!confirmOrder && cartModalActions}
      </footer>
    </div>
  );
};

export default Cart;
