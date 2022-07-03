import React from "react";

const Generators =(props)=>{
    return(
        <div className="gens" id={props.id} onClick={props.handleClick} key={props.id}><p>{props.name}</p></div>
    )
}

export default Generators;