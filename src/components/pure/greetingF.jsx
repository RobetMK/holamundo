import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //breve introduccion a useState
    //const [variable, método para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(35);
    const birthday = ()=>{
        //actualizar
        setage(age+1)
    }
    return (
        <div>
            <h1>
                Hola Sr: {props.name} desde comp func!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick = {birthday}>
                    cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
