import React from "react";
import '../App.css';

export default function IncrementButton({type, changeHandler, id}){
    if(type === "increment"){
        return (
                <i id={id} onClick={changeHandler} className="fa-solid fa-arrow-up"></i>
        )
    }
    else if(type === "decrement"){
        return (
                <i id={id} onClick={changeHandler} className="fa-solid fa-arrow-down"></i>
        )
    }
}