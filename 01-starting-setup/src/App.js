import ExpensesTemplate from "./components/expenses/expenses_template/ExpensesTemplate";
import NewExpense from "./components/expenses/new_expense/NewExpense";

/**
 * Root element to render all other tags
 * @returns {JSX.Element}
 */
const App = () => {
  console.log("Starting App")
  const addExpenseHandler = (expenses) => {
    console.log("in Expenses Template");
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesTemplate/>
    </div>
  )
}

export default App;
