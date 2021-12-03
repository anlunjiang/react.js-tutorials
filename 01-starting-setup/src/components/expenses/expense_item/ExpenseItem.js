import "./ExpenseItem.css";
import {useState} from "react";
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
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        console.log(title)
        setTitle("Updated");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
