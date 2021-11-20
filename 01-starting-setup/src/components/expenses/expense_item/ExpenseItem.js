import "./ExpenseItem.css";
import Card from "../../card/Card";
import ExpenseDate from "../expense_date/ExpenseDate";

/**
 * Expense Item - renders list
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseItem = (props) => {
    console.log(props.children)
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;
