import React from 'react';
import './clicks.css';
import '../node_modules/font-awesome/css/font-awesome.css';


let Clicks = (props) => {
    return(        
        <div className = "click" id = "change">                    
            <p>{props.counter}</p>
            <button onClick = {() => {props.addClick()}} id = "plus">
                <i className = "fa fa-plus" id = "iPlus"></i>
            </button>
            <button id = "refresh" onClick = {() => {props.refresh()}}>
                <i className = "fa fa-refresh"></i>
            </button>
            <button onClick = {() => {props.decreaseClick()}} id = "minus">
                <i id = "iMinus" className = "fa fa-minus"></i>
            </button>
        </div>
    )    
}

export default Clicks;