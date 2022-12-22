import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function CountPage(props) {
    const dispatch = useDispatch()
    const result=useSelector(state => state.result)
    const [number1, setNumber1]=useState({num1:''})
    const [number2, setNumber2]=useState({num2:''})
    const incrBtn=()=>{
        dispatch({
            type:"INCREMENT",
            payload:number1,
            payload2:number2
        })
        if(number1.num1 === ''){
            alert("Пустое поле!")
        } else if(number2.num2 === ''){
            alert("Пустое поле!")
        }
    }
    const decrBtn=()=>{
        dispatch({
            type:"DECREMENT",
            payload:number1,
            payload2:number2
        })
        if(number1.num1 === ''){
            alert("Пустое поле!")
        } else if(number2.num2 === ''){
            alert("Пустое поле!")
        }
    }
    const mulBtn=()=>{
        dispatch({
            type:"MULTI",
            payload:number1,
            payload2:number2
        })
        if(number1.num1 === ""){
            alert("Пустое поле!")
        } else if(number2.num2 === ''){
            alert("Пустое поле!")
        }
    }
    const divBtn=()=>{
        dispatch({
            type:"DIV",
            payload:number1,
            payload2:number2
        })
        if(number1.num1 === ''){
            alert("Пустое поле!")
        } else if(number2.num2 === ''){
            alert("Пустое поле!")
        }
    }


    return (
        <div>
            <input type="number" name='num1' placeholder='num1'  onChange={(e)=>setNumber1(+e.target.value)}/><input type="number" name="num2" placeholder='num2' onChange={(e)=>setNumber2(+e.target.value)}/>
            <button onClick={incrBtn}>+</button>
            <button onClick={decrBtn}>-</button>
            <button onClick={mulBtn}>*</button>
            <button onClick={divBtn}>/</button>
            <h1>{result}</h1>

        </div>
    );
}

export default CountPage;