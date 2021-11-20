import ExpensesTemplate from "./components/expenses/expenses_template/ExpensesTemplate";

/**
 * Root elemtent to render all other tags
 * @returns {JSX.Element}
 */
export default function App() {
    console.log("Starting App")
    return (
        <ExpensesTemplate/>
    )
}
