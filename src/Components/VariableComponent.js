import React, {useState} from "react";
import Label from "./Label";
import IncrementButton from "./IncrementButton";
import '../App.css';

export default function VariableChanger({text, variable, changeValue, idLabel, idInc, idDecr, idLen}){
    return (
        <div>
            <Label id={idLabel} text={text}/>
            <div className="variable-changer">
                
                <h1 className="vc-panel">
                    <IncrementButton id={idInc} type="increment" changeHandler={() => {changeValue(1)}}/>
                    <span id={idLen}>{variable}</span>
                    <IncrementButton id={idDecr} type="decrement" changeHandler={() => {changeValue(-1)}}/>    
                </h1>                
            </div>
        </div>
    )
}