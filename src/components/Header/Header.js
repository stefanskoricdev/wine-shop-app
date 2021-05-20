import { Fragment } from "react";
import Navigation from "./Navigation/Navigation";

import styles from "../Header/Header.module.scss";
const header = () => {
  return (
    <Fragment>
      <header className={styles.Header}>
        <Navigation />
        <div className={styles.HeaderBackground}>
          {/*Header background image*/}
        </div>
      </header>
    </Fragment>
  );
};
export default header;
