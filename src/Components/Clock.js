import React,{useEffect, useState} from "react";
import Label from "./Label";

export default function Clock({clockState, min, sec, idLabel}) {
    let locSec;
    let locMin;
    if(sec<10) locSec=String('0'+sec);
    else locSec = sec;
    if(min<10) locMin=String('0'+min);
    else locMin = min;
    return (
        <div className="clock-text">
            <Label id={idLabel} text={clockState}/>
            <div>
                <h1 id="time-left">{locMin} : {locSec}</h1>
            </div>
        </div>
    )
}