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
          onClick={(e) => props.changeAmount(e, "INCREASE_AMOUNT")}
        >
          +
        </button>
        <button
          data-handler={props.id}
          onClick={(e) => props.changeAmount(e, "DECREASE_AMOUNT")}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
