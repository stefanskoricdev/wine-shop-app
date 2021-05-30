import { Fragment } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "../Header/Header.module.scss";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.Header}>
        <Navigation cartBtnClicked={props.cartBtnClicked} />
        <div className={styles.HeaderBackground}>
          {/*Header background image*/}
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
