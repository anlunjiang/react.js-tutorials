# React Rendering Lists and Conditional Content

Map method - Creates a new array from another array - whilst transforming every element in that original 
array - like a lambda function

```javascript
const array1 = [1 ,2 ,3 ,4];
const map1 = array1.map(x => x * 2); // creates a new array map1

{
props.items.map(expense => (
  <ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />))
}
```
When rendering lists of data - react ensures efficient updates.
* Currently, when a new expense is added - it is added as the last item in the list. React
only looks at the length of the array div first 
* Since the expenses all look the same from a format standpoint - it will just append a new one
* It will only then see the expenses details are not the same - and therefore will 
update each one iteratively

This is NOT ideal since it leads to performance issues and bugs regarding state. 

* Therefore, we have a way of telling react where to add the `key` prop:
```javascript
<ExpenseItem
    key={}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
/>
```
* This is a prop you can add to any component - that helps react identify individual items
  * You set a unique key for each list item
  * This way React can know which id is associated with each element and is more efficient
  * It knows where each element is 
* You should ALWAYS add key prop when mapping out a list of items

## Conditional Content

* Rendering differnt output under different conditions
