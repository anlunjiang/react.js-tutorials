import ExpensesTemplate from "./components/expenses/expenses_template/ExpensesTemplate";
import NewExpense from "./components/expenses/new_expense/NewExpense";

/**
 * Root element to render all other tags
 * @returns {JSX.Element}
 */
const App = () => {
    console.log("Starting App")
    return (
        <div>
            <NewExpense/>
            <ExpensesTemplate/>
        </div>
    )
}

export default App;
