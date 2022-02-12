import React from 'react';
import '../css/buttonBorrow.css'

const ButtonBorrow = (props) => { 

    
    return (

        <button className={props.borrow ? "buttonBorrow borrowed" : "buttonBorrow notBorrowed"} 
        uppercase={true}
        >
            OZNAČI POSUĐENO
        </button>

    )

}

export default ButtonBorrow; 