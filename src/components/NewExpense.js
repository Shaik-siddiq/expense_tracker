import React,{useState} from 'react'
import '../assets/NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const [isEditing, setisEditing] = useState(false)
    const saveExpenseDataHandler = (enteredexpensedata) =>{
        const expensedata ={
            ...enteredexpensedata,
            id: Math.random().toString()
        }  
        props.onAddExpense(expensedata)
    }
    const EditingHandler = ()=>{
        setisEditing(true)
    }
    const stopEditingHandler = () =>{
        setisEditing(false)
    }
    
    return(
        <div className="new-expense">
           {!isEditing && <button onClick={EditingHandler}>Add New Expense</button> }
           {isEditing && <ExpenseForm onstop={stopEditingHandler} onsaveExpenseData={saveExpenseDataHandler} /> }
        </div>
    )
}
export default NewExpense