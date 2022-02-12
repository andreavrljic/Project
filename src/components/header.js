import React from "react";
import '../css/header.css'

const Header = () => {

    // const inputChangeHandler = (event) => {
    //     console.log(event.target.value)
    // }


        return (

            <section className="header">
                <div className="header-inner">
                    <h2 className = "header-text">Popis knjiga</h2>  
                    <input className="input" type="text" placeholder="Pretraži"/>
                </div>
            </section>

            )

}

 

export default Header; 