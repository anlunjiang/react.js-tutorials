import ExpenseItem from "../expense_item/ExpenseItem";
import {expenses} from "./data";
import "./ExpensesTemplate.css";
import Card from "../../card/Card";

export default function ExpensesTemplate() {
    return (
        <Card className="expensescss">
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
        </Card>
    );

}