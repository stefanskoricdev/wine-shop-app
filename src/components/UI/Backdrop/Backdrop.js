import styles from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.closeBackdropHandler}
      id="Backdrop"
      className={
        props.cartBtnIsClicked
          ? [styles.Backdrop, styles["Active"]].join(" ")
          : styles.Backdrop
      }
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
