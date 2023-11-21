import React from "react";

export default function Controls({type, clickHandler}){
    if(type === "pause"){
        return (
            <div id="start-stop" onClick={clickHandler}><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></div>
        )
    } else if(type === "reset"){
        return (
            <div id="reset" onClick={clickHandler}><i className="fas fa-undo"></i></div>
        )
    } 
}