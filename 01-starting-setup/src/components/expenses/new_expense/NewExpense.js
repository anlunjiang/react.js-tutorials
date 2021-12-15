import "./NewExpense.css"
import ExpenseForm from "../expense_form/ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditinHandler = () => {
    setIsEditing(true)
  };
  const stopEditinHandler = () => {
    setIsEditing(false)
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditinHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditinHandler}/>}
    </div>
  )
}

export default NewExpense;