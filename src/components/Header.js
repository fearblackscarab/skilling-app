import React from "react";

const Header=(props)=>{
    return(
        <header>
            <div className="container">
            <h1>Influence:{props.currency.influence}</h1>
            </div>
        </header>
    )
}

export default Header;