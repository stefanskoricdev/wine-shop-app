import styles from "./WineItem.module.scss";
const wineItem = (props) => {
  return (
    <li className={styles.WineItem}>
      <div className={styles.WineDetails}>
        <h3>{props.wineTitle}</h3>
        <p>{props.wineDetails}</p>
        <p>{props.price}</p>
      </div>
      <div className="wine-amount">
        <form>
          <label>
            Amount:
            <input
              name="amount"
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
            />
          </label>
          <button type="" submit>
            + ADD
          </button>
        </form>
      </div>
    </li>
  );
};
export default wineItem;
