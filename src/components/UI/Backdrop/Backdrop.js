import styles from "./Backdrop.module.scss";

const backdrop = (props) => {
  return <div className={styles.Backdrop}>{props.children}</div>;
};

export default backdrop;
