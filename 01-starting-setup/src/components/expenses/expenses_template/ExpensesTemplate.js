import "./ExpensesTemplate.css";
import Card from "../../card/Card";
import ExpensesFilter from "../expense_filter/ExpenseFilter";
import {useState} from "react";
import ExpensesList from "../expenses_list/ExpensesList";
import ExpensesChart from "../expenses_chart/ExpensesChart";


const ExpensesTemplate = (props) => {
  const [filteredYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }
  const clickHandler = () => {
    console.log(props.items)
  }
  const filteredExpenses = props.items.filter(x => {
    return x.date.getFullYear() === parseInt(filteredYear)
  })

  return (
    <Card className="expensescss">

      <button onClick={clickHandler}>Log Current Expenses</button>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <h2>Let's get started!</h2>
      <p>This is also visible - cool!</p>
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  )
}

export default ExpensesTemplate;