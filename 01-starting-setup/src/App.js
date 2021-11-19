import ExpenseItem from "./components/expenses/expense_item/ExpenseItem";
import {expenses} from "./components/expenses/expense_item/data";

/**
 * Root elemtent to render all other tags
 * @returns {JSX.Element}
 */
export default function App() {
    console.log("Starting App")
    return (
        <div>
            <h2>Let's get started!</h2>
            <p>This is also visible - cool!</p>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
        </div>
    );
}

