import styles from "./Modal.module.scss";

const modal = () => {
  return (
    <div className={styles.Modal}>
      <ul>
        <h3>NO ITEMS</h3>
      </ul>
      <p>
        TOTAL AMMOUNT: <span>0 $</span>
      </p>
      <div>
        <button>CLOSE</button>
        <button>ORDER</button>
      </div>
    </div>
  );
};

export default modal;
