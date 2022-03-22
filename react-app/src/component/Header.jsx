import React from "react";

export default function Header({title,onChangeMode}){
    return(
    <div>
        <header><a href="/" onClick={(event)=>{
            event.preventDefault();
            onChangeMode();
        }}>{title}</a></header>
    </div>
    );
}