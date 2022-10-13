import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityInputRef.current.value;

    setFormInputsValidity({
      name: isNotEmpty(name),
      street: isNotEmpty(street),
      postalCode: isFiveChars(postalCode),
      city: isNotEmpty(city),
    });

    if (
      formInputsValidity.name &&
      formInputsValidity.street &&
      formInputsValidity.postalCode &&
      formInputsValidity.city
    ) {
      props.onSubmit({ name, street, postalCode, city });
    }
  };

  const classGenerator = (isValid) => {
    return `${classes.control} ${isValid ? "" : classes.invalid}`;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classGenerator(formInputsValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please input a valid name</p>}
      </div>
      <div className={classGenerator(formInputsValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please input a valid street</p>}
      </div>
      <div className={classGenerator(formInputsValidity.postalCode)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeRef} />
        {!formInputsValidity.postalCode && (
          <p>Please input a valid postal code</p>
        )}
      </div>
      <div className={classGenerator(formInputsValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please input a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
