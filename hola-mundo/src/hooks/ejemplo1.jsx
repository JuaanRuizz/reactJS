// Ejemplo de uso del hook useState

// Crear un componente tipo función y acceder a su estado privado a traves de un hook y, además, poder modificarlo
import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador.
    const initialValue = 0;
    //Valor inicial para una persona 
    const initialPerson = {
        name: "Sandra",
        email: "sandram8787@gmail.com"
    }

    //Queremos que el InitialValue y initialPerson sean parte del estado del componente y asi poder gestionar su cambio y que este se vea reflejado en la vista del componente.

    // const [variableName, forChangingFunction] = useState(initialValue)
    const [counter, setCounter] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);

    //Crear métodos para incrementar contador y cambiar la persona.

    //Función para actualizar es estado privado que contiene el contador.

    function increaseCounter(){
        /* ? forChangingFunction(newValue)*/
        setCounter(counter + 1);
    }

    //Función para actualizar el estado de persona en el componente
    function updatePerson (){
        setPerson(
            {
                name: "Juan",
                email: "juanma78877@outlook.com"
            }
        )
    }

    return (
        <div>
            <h1>
                Ejemplo de useState()
            </h1>
            <h2>
                COUNTER: {counter}
            </h2>
            <h2>
                PERSON DATA: 
            </h2>
            <h3>
                NAME: {person.name}
            </h3>
            <h4>
                EMAIL: {person.email}
            </h4>
            {/* Bloque de botones para actualizar el estado (State) */}
            <div>
                <button onClick = {increaseCounter}>
                    Increase counter
                </button>
            </div>
            <div>
                <button onClick = {updatePerson}>
                    Actualizar persona
                </button>
            </div>
        </div>
    );
}

export default Ejemplo1;
