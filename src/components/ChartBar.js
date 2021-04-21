import React from 'react';
import '../assets/ChartBar.css';

const ChartBar = (props) =>{
    let barfill = 0;
    if (props.maxvalue > 0){
        barfill = Math.round((props.value / props.maxvalue)*100) + '%' ;
    }
    return(
        <div className="chart-bar">
        <div className="chart-bar__inner ">
            <div className="chart-bar__fill" style={{height:barfill}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>

        </div>
    )
}
export default ChartBar