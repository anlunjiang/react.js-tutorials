import ExpenseItem from "../expense_item/ExpenseItem";
import "./ExpensesTemplate.css";
import Card from "../../card/Card";
import ExpensesFilter from "../expense_filter/ExpenseFilter";
import {useState} from "react";

const ExpensesTemplate = (props) => {
  const [filteredYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  const clickHandler = () => {
    console.log(props.items)
  }
  console.log(props.items)
  return (
    <Card className="expensescss">

      <button onClick={clickHandler}>Log Current Expenses</button>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

      <h2>Let's get started!</h2>
      <p>This is also visible - cool!</p>

      {
        props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />))
      }
    </Card>
  )
}

export default ExpensesTemplate;