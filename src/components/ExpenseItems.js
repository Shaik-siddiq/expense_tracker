import React from 'react'
import '../assets/ExpenseItems.css'
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props) {
    
    return (
        <Card className='expense-item'>
        <div>
        <ExpenseDate date={props.date}/>
        </div>
            <div className='expense-item__description'>
               <h2>{props.title}</h2> 
            </div>
            <div className="expense-item__price">
                {props.amount}
            </div>
        </Card>
    )
}

export default ExpenseItems
