import React from "react";
import Controls from "./Control";

export default function ControlsGroup({pause, resume, reset}){
    return(
        <div className="c-group">
            <Controls type="pause" clickHandler={pause}/>
            <Controls type="reset" clickHandler={reset}/>
        </div>
    )
}