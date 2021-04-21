import React from 'react'
import ExpenseItems from './ExpenseItems'
import '../assets/ExpensesList.css'
const ExpenseList = (props)=>{
    if(props.filteredItems.length === 0){
    return <h2 className="expenses-list__fallback ">no expenses found</h2>
        }
    return(  
        <ul className="expenses-list ">
         <li>{props.filteredItems.map((expense)=>{
            return(
              <ExpenseItems 
              key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            />
            )
          })
        }
        </li>
        </ul>
    )
}
export default ExpenseList