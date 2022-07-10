import React from "react";
import Generators from "./Generators";


const Main = (props) => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {props.influencers.map(item => {
                        return <Generators id={item.id} key={item.id} handleClick={props.addGen} name={item.name} quantity={item.quantity} cost={item.cost}/>
                    })}
                </div>
            </div>
        </main>
    )
}

export default Main;