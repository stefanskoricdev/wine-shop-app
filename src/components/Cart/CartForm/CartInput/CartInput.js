import styles from "./CartInput.module.scss";
const CartInput = (props) => {
  return (
    <label htmlFor={props.htmlFor}>
      {`${props.title} :`}
      <input
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.value}
        type={props.type}
        id={props.id}
      />
      {props.hasError && (
        <p className={styles.Error}>{`Please Fill ${props.title} Field`}</p>
      )}
    </label>
  );
};

export default CartInput;
