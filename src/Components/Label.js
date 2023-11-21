import React from "react";

export default function Label({text, id}) {
    return (
        <div>
            <h1 id={id} className="center">{text}</h1>
        </div>
    )
}