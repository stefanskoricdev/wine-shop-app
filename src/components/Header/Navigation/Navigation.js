import styles from "./Navigation.module.scss";
import CartBtn from "../CartBtn/CartBtn";

const Navigation = (props) => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Logo}>
        <h1>WineShop</h1>
      </div>
      <CartBtn cartBtnClicked={props.cartBtnClicked} />
    </nav>
  );
};

export default Navigation;
