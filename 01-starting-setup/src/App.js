import ExpensesTemplate from "./components/expenses/expenses_template/ExpensesTemplate";
import NewExpense from "./components/expenses/new_expense/NewExpense";
import {INITIAL_EXPENSES} from "./components/expenses/expenses_template/data";
import {useState} from "react";

/**
 * Root element to render all other tags
 * @returns {JSX.Element}
 */
const App = () => {
  const[expenses, setExpenses] = useState(INITIAL_EXPENSES);
  console.log("Starting App");
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesTemplate items={expenses}/>
    </div>
  )
}

export default App;
