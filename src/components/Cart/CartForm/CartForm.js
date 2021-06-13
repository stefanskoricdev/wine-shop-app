import { useState } from "react";
import useForm from "../../../hooks/use-form";
import CartInput from "./CartInput/CartInput";
import styles from "./CartForm.module.scss";

const CartForm = (props) => {
  const {
    value: enteredNameValue,
    hasError: enteredNameHasError,
    valueIsValid: enteredFirstNameValueIsValid,
    handleChange: enteredNameHandleChange,
    handleBlur: firstNameBlurHandler,
    resetInput: resetFirstName,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredLastNameValue,
    hasError: enteredLastNameHasError,
    valueIsValid: enteredLastNameValueIsValid,
    handleChange: enteredLastNameHandleChange,
    handleBlur: lastNameBlurHandler,
    resetInput: resetLastName,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredEmailValue,
    hasError: enteredEmailHasError,
    valueIsValid: enteredEmailValueIsValid,
    handleChange: enteredEmailHandleChange,
    handleBlur: emailBlurHandler,
    resetInput: resetEmail,
  } = useForm((value) => value.trim() !== "" && value.includes("@"));
  const {
    value: enteredCityValue,
    hasError: enteredCityHasError,
    valueIsValid: enteredCityValueIsValid,
    handleChange: enteredCityHandleChange,
    handleBlur: cityBlurHandler,
    resetInput: resetCity,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredStreetValue,
    hasError: enteredStreetHasError,
    valueIsValid: enteredStreetValueIsValid,
    handleChange: enteredStreetHandleChange,
    handleBlur: streetBlurHandler,
    resetInput: resetStreet,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredPostalValue,
    hasError: enteredPostalHasError,
    valueIsValid: enteredPostalValueIsValid,
    handleChange: enteredPostalHandleChange,
    handleBlur: postalBlurHandler,
    resetInput: resetPostal,
  } = useForm((value) => value.trim().length === 5);

  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid =
      enteredFirstNameValueIsValid &&
      enteredLastNameValueIsValid &&
      enteredEmailValueIsValid &&
      enteredCityValueIsValid &&
      enteredStreetValueIsValid &&
      enteredPostalValueIsValid;

    if (formIsValid) {
      resetFirstName();
      resetLastName();
      resetEmail();
      resetCity();
      resetStreet();
      resetPostal();
      console.log("Form Valid!");
    } else {
      setIsFormValid(false);
      console.log("Form not valid");
      return;
    }
    console.log({
      firstName: enteredNameValue,
      lastName: enteredLastNameValue,
      email: enteredEmailValue,
      city: enteredCityValue,
      street: enteredStreetValue,
      postalCode: enteredPostalValue,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.CartForm}>
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
    </form>
  );
};

export default CartForm;
