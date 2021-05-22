import styles from "./Navigation.module.scss";
import CartBtn from "../CartBtn/CartBtn";
const navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Logo}>
        <h1>WineShop</h1>
      </div>
      <CartBtn />
    </nav>
  );
};

export default navigation;