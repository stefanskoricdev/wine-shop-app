import { useContext, useState } from "react";
import CartContext from "../../../store/cartContext";

import styles from "./WineItem.module.scss";
const WineItem = (props) => {
  const [inputValue, setInputValue] = useState(1);
  const ctx = useContext(CartContext);

  const addToCart = (e) => {
    e.preventDefault();
    ctx.addWineToCartHandler({
      id: props.wineId,
      title: props.wineTitle,
      details: props.wineDetails,
      price: props.price,
      ammount: parseInt(inputValue),
    });
  };

  return (
    <li className={styles.WineItem}>
      <div className={styles.WineDetails}>
        <h3>{props.wineTitle}</h3>
        <p>{props.wineDetails}</p>
        <p>{props.price}</p>
      </div>
      <div className="wine-amount">
        <form onSubmit={addToCart}>
          <label>
            Amount:
            <input
              onChange={(e) => setInputValue(e.target.value)}
              name="amount"
              type="number"
              min="1"
              max="5"
              step="1"
              value={inputValue}
            />
          </label>
          <button type="submit">+ ADD</button>
        </form>
      </div>
    </li>
  );
};
export default WineItem;
