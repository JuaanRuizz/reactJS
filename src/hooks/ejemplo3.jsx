//Ejemplo Hooks:
// useState()
// useContext()

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde un padre.
 */
const myContext = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse con los datos del padre.
    const state = useContext(myContext);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>
                La sesión es: {state.session}
            </h2>
        </div>
    );
}





export default function MyComponentWithContext() {

const initialState = {
    token: "1234567",
    session: 1
}

//Creamos un estado de este componente
const [sessionData, setSessionData] = useState(initialState);

function updateSession(){
    setSessionData(
        {
            token: "JMRH1409",
            session: sessionData.session +1
        }
    );
}

    return (
        <myContext.Provider value = {sessionData}>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
            {/* Además, si se actualiza, los componentes de aquí también lo actualizan */}
            <h1>
                Ejemplo 3 / useState() y useContext()
            </h1>
            <Componente1></Componente1>
            <button onClick={updateSession}>Actualiza Sesión</button>
        </myContext.Provider>
    )
}

