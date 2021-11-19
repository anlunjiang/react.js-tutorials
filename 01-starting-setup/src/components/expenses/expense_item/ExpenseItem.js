import "./ExpenseItem.css";
import ExpenseDate from "../expense_date/ExpenseDate";

/**
 * Expense Item - renders list
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ExpenseItem(props) {
    console.log(props.children)
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}