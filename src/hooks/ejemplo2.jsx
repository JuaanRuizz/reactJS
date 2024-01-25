//Ejemplo de uso de:
// useState()
// useRef()
// useEffect()

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos
    //Cada uno en un estado (State) diferente.
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //Vamos a crear una refencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const myRef = useRef();

    function increaseCounter1 (){
        setCounter1(counter1 + 1);
    }

    function increaseCounter2 (){
        setCounter2(counter2 + 1);
    }

    //Trabajando con useEffect()
    // ? Caso1: Ejecutar siempre un snippet de código.
    // es decir, cada vez que se haya ejecutado un cambio en e estado del componente se ejecuta aquello que esté dentro del useEffect
    
    // useEffect(() => {
    //     console.log("Cambio en el estado del componte");
    //     console.log("Mostranfo referencia a elemento del DOM:");
    //     console.log(myRef);
    // })


    // ? Caso2: Ejecutar solo cuando cuando se cambie el CONTADOR 1 o CONTADOR 2
    // Cada vez que haya un cambio en el CONTADOR 1, se ejecuta lo que hay en useEffect()
    // Cada vez que haya un cambio en el CONTADOR 1, se ejecuta lo que hay en useEffect()

useEffect(() => {
        console.log("Cambio en el estado del CONTADOR 1 / CONTADOR 2");
        console.log("Mostranfo referencia a elemento del DOM:");
        console.log(myRef);
    } , [counter1, counter2]);




    return (
        <div>
            <h1>
                Ejemplo de useState(), useRef(), useEffect()
            </h1>
            <h2>CONTADOR 1: {counter1}</h2>
            <h2>CONTADOR 2: {counter2}</h2>
            {/* Elemento referenciado */}
            <h4 ref = {myRef}>
                Ejemplo de elemento referenciados
            </h4>
            {/* Botones para incrementar contadores */}
            <div>
                <button onClick = {increaseCounter1}>Incrementar contador 1</button>
            </div>
            <div>
                <button onClick = {increaseCounter2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
