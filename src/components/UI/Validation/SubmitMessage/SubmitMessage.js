import styles from "./SubmitMessage.module.scss";

const SubmitMessage = (props) => {
  return (
    <div className={styles.SubmitMessage}>
      <h2>{props.validationMessage}</h2>
      <p>Please press close to reset cart</p>
      <button id="resetCart" onClick={props.handleReset} type="button">
        CLOSE
      </button>
    </div>
  );
};

export default SubmitMessage;
