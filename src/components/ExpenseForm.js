import React,{useState} from 'react'
import '../assets/ExpenseForm.css'


const ExpenseForm = (props) =>{
const [userinput, setUserInput] = useState({
    enteredtitle:" ",
    enteredamount:" ",
    entereddate:" "
})
const onChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return{
            ...prevState, [event.target.name]:[event.target.value]
        }
    })
} 
const AmountHandler = (event)=>{
    setUserInput({...userinput, enteredamount:event.target.value})
}
const onSubmitHandler = (event)=>{
    event.preventDefault()
    const expenses ={
        title:userinput.enteredtitle,
        amount: +userinput.enteredamount,
        date: new Date(userinput.entereddate)
    }
    props.onsaveExpenseData(expenses)
}
    return(
        <form className="new-expense__controls" onSubmit={onSubmitHandler}>
            <div className="new-expense__control">
                <label>title</label>
                <input type="text"
                name="enteredtitle"
                onChange={onChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"
                name="enteredamount"
                onChange={AmountHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"
                min="2019-01-01"
                max="2021-12-31"
                name="entereddate"
                onChange={onChangeHandler}
                />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
}
export default ExpenseForm;