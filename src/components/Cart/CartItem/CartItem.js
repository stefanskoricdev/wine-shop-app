import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <li className={styles.CartItem}>
      <div className={styles.Details}>
        <h3>{props.title}</h3>
        <p>
          {props.price}
          <span>{props.ammount}</span>
        </p>
      </div>
      <div className={styles.Ammount}>
        <button
          data-handler={props.id}
          onClick={(e) => props.changeAmmount(e, "INCREASE_AMMOUNT")}
        >
          +
        </button>
        <button
          data-handler={props.id}
          onClick={(e) => props.changeAmmount(e, "DECREASE_AMMOUNT")}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
