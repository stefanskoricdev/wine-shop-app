import { useState, useContext, useEffect, Fragment } from "react";
import useForm from "../../../hooks/use-form";
import CartInput from "./CartInput/CartInput";
import styles from "./CartForm.module.scss";
import db from "../../../services/firebase";
import Loader from "../../UI/Loader/Loader";
import CartContext from "../../../store/cartContext";
import SubmitMessage from "../../UI/Validation/SubmitMessage/SubmitMessage";

const CartForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);

  const ctx = useContext(CartContext);
  const { clearCart } = ctx;

  const {
    value: enteredNameValue,
    hasError: enteredNameHasError,
    handleChange: enteredNameHandleChange,
    handleBlur: firstNameBlurHandler,
    resetInput: resetFirstName,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredLastNameValue,
    hasError: enteredLastNameHasError,
    handleChange: enteredLastNameHandleChange,
    handleBlur: lastNameBlurHandler,
    resetInput: resetLastName,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredEmailValue,
    hasError: enteredEmailHasError,
    handleChange: enteredEmailHandleChange,
    handleBlur: emailBlurHandler,
    resetInput: resetEmail,
  } = useForm((value) => value.trim() !== "" && value.includes("@"));
  const {
    value: enteredCityValue,
    hasError: enteredCityHasError,
    handleChange: enteredCityHandleChange,
    handleBlur: cityBlurHandler,
    resetInput: resetCity,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredStreetValue,
    hasError: enteredStreetHasError,
    handleChange: enteredStreetHandleChange,
    handleBlur: streetBlurHandler,
    resetInput: resetStreet,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredPostalValue,
    hasError: enteredPostalHasError,
    handleChange: enteredPostalHandleChange,
    handleBlur: postalBlurHandler,
    resetInput: resetPostal,
  } = useForm((value) => value.trim().length === 5);

  useEffect(() => {
    if (
      enteredNameValue &&
      enteredLastNameValue &&
      enteredStreetValue &&
      enteredCityValue &&
      enteredEmailValue &&
      enteredPostalValue
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    enteredNameValue,
    enteredLastNameValue,
    enteredStreetValue,
    enteredCityValue,
    enteredEmailValue,
    enteredPostalValue,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      resetFirstName();
      resetLastName();
      resetEmail();
      resetCity();
      resetStreet();
      resetPostal();
    } else {
      setIsFormValid(false);
      return;
    }
    try {
      setIsLoading(true);
      await db.collection("orders").add({
        firstName: enteredNameValue,
        lastName: enteredLastNameValue,
        email: enteredEmailValue,
        city: enteredCityValue,
        street: enteredStreetValue,
        postalCode: enteredPostalValue,
      });
      setIsSubmited(true);
    } catch (err) {
      setIsError(err.message);
    }
    setIsLoading(false);
  };

  const handleResetCart = () => {
    clearCart();
    props.handleCancel();
  };

  const inputGroup = (
    <Fragment>
      <h3>Please fill out all fields</h3>
      <CartInput
        htmlFor="first-name"
        title="First Name"
        handleChange={enteredNameHandleChange}
        handleBlur={firstNameBlurHandler}
        value={enteredNameValue}
        type="text"
        id="first-name"
        hasError={enteredNameHasError}
      />
      <CartInput
        htmlFor="last-name"
        title="Last Name"
        handleChange={enteredLastNameHandleChange}
        handleBlur={lastNameBlurHandler}
        value={enteredLastNameValue}
        type="text"
        id="last-name"
        hasError={enteredLastNameHasError}
      />
      <CartInput
        htmlFor="email"
        title="Email"
        handleChange={enteredEmailHandleChange}
        handleBlur={emailBlurHandler}
        value={enteredEmailValue}
        type="text"
        id="email"
        hasError={enteredEmailHasError}
      />
      <CartInput
        htmlFor="city"
        title="City"
        handleChange={enteredCityHandleChange}
        handleBlur={cityBlurHandler}
        value={enteredCityValue}
        type="text"
        id="city"
        hasError={enteredCityHasError}
      />
      <CartInput
        htmlFor="street"
        title="Street"
        handleChange={enteredStreetHandleChange}
        handleBlur={streetBlurHandler}
        value={enteredStreetValue}
        type="text"
        id="street"
        hasError={enteredStreetHasError}
      />
      <CartInput
        htmlFor="postal-code"
        title="Postal"
        handleChange={enteredPostalHandleChange}
        handleBlur={postalBlurHandler}
        value={enteredPostalValue}
        type="text"
        id="postal-code"
        hasError={enteredPostalHasError}
      />
      {!isFormValid && (
        <p className={styles.Error}>
          Form is not valid. Please check your input fields
        </p>
      )}
      <div>
        <button type="button" onClick={props.handleCancel}>
          CANCEL
        </button>
        <button type="submit">CONFIRM</button>
      </div>
    </Fragment>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isFormValid
          ? styles.CartForm
          : [styles.CartForm, styles["invalid"]].join(" ")
      }
    >
      {!isLoading && !isError && !isSubmited && inputGroup}
      {isLoading && <Loader />}
      {isSubmited && (
        <SubmitMessage
          validationMessage={"Your order has been successfully submited!"}
          handleReset={handleResetCart}
        />
      )}
      {isError && (
        <SubmitMessage
          validationMessage={
            "There was an error submiting your order. Please try again later!"
          }
          handleReset={handleResetCart}
        />
      )}
    </form>
  );
};

export default CartForm;
