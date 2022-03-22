import React from "react";


export default function Nav(props){
    const lis = props.topics;
    const Item = lis.map((index)=>
        <li key={index.id}>
            <a id={index.id} href={"/read/"+index.id} onClick={(event)=>{
                event.preventDefault();
                props.onChangeMode(event.target.id);
                }}>{index.title}</a>
        {index.body}</li>
    );
    return(
        <nav>
            <ol>
                {Item}      
            </ol>
        </nav>
    );
}