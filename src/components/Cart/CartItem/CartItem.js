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
    </li>
  );
};

export default CartItem;
