import React, {useState} from 'react'
import Card from './Card';
import '../assets/Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear]=useState(2020);
  const FilteredYearHandler =  selectedYear =>{
    setFilteredYear(selectedYear)
  }
  const filteredItems = props.items.filter((filtered)=>{
    return filtered.date.getFullYear().toString() === filteredYear;
  })
  
  return (
    <Card className='expenses'>
    <ExpenseFilter selected={filteredYear} onchangefilter={FilteredYearHandler} />
    <ExpensesChart expenses={filteredItems}/>
      <ExpenseList filteredItems={filteredItems} />
    </Card>
  );
}

export default Expenses;
