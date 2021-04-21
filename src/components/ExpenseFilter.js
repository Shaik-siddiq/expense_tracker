import React from 'react'
import "../assets/ExpenseFilter.css"

const ExpenseFilter = (props)=>{

    const pulldata = event =>{
        props.onchangefilter(event.target.value)
    }
    return(
        <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter By Year</label>
            <select value={props.selected} onChange={pulldata}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
        </div>
    )
}
export default ExpenseFilter;