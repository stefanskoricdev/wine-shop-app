import { useState } from "react";
const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const inputHasError = !valueIsValid && isTouched;
  // If input field is clicked and empty it will be invalid

  const handleChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    hasError: inputHasError,
    handleChange,
    handleBlur,
    resetInput,
  };
};
export default useForm;
