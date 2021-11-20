import ExpensesTemplate from "./components/expenses/expenses_template/ExpensesTemplate";

/**
 * Root elemtent to render all other tags
 * @returns {JSX.Element}
 */
const App = () => {
    console.log("Starting App")
    return (
        <ExpensesTemplate/>
    )
}

export default App;