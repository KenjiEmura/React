import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // YOU CAN ALSO KEEP THE STATE INSIDE AN OBJECT
  // NOT RECOMMENDED BECAUSE YOU WILL HAVE TO COPY THE
  // PREVIOUS STATE OF THE KEYS THAT ARE NOT BEING UPDATED

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: e.target.value };
  //   });
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: e.target.value };
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: e.target.value };
  //   });
  // };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2000-01-01"
          max="2023-01-01"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
