import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introducción a useState
    //Estructura del useState es: const [variable, método para actualizarla] = useState(valorInicial;
    const [age, setage] = useState(22);


    const birthday = () => {
        //Actualizar el state
        setage(age + 1);
    }

    return (
        <div>
                <h1>
                    ¡Hola {props.name} desde componente función! 
                </h1>
                <h2>
                    Tu edad es de: {age}
                </h2> 
                <div>
                    <button onClick = {birthday}>
                        get older
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;

