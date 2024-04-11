import React from "react";

const Generators =(props)=>{
    return(
        <div>
            <h2>{props.quantity}</h2>
        <button className="gens" id={props.id} onClick={props.handleClick} key={props.id} cost={props.cost}>{props.name} : {props.cost}</button>
        </div>
    )
}

export default Generators;