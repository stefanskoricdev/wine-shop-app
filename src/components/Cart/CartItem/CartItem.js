import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <li className={styles.CartItem}>
      <div className={styles.Details}>
        <h3>{props.title}</h3>
        <p>
          {props.price}
          <span>{props.amount}</span>
        </p>
      </div>
      <div className={styles.Amount}>
        <button
          data-handler={props.id}
          onClick={(e) => props.changeAmount(e, "UPDATE_AMOUNT", "increaseBtn")}
        >
          +
        </button>
        <button
          data-handler={props.id}
          onClick={(e) => props.changeAmount(e, "UPDATE_AMOUNT", "decreaseBtn")}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
