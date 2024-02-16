import React, { useReducer, useContext } from 'react';

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const myContext = React.createContext(null); 

const Points = () => { //Componente al que le vamos a pasar el contexto

    const state = useContext(myContext); //No olvidar dar el contexto al useConext 

    return (
        <p>Points: { state.count }</p>
    )

}

const Counter = () => {

    // Initial State for Reducer
    const initialState = { //Lo hacemos sobre el propio componente ya que es un hook de react
        count: 0
    }

    // Reducer to change State / Reducer asociado al estado 
    const reducer = (state, action) => {

        switch (action.type) { //Evaluamos el tipo de la acción
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default:
                return state;
        }

    }

    // Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState) //Solo con colocar useReducer se bería autocompletar la plantilla del useReducer
    
    return (
        <myContext.Provider value={state}>
            <div>
                {/* <p>Points: { state.count }</p> */}
                <Points />
                <button 
                    onClick = {
                        () => dispatch({
                            type: INCREMENT,
                            payload: { //recordar que payload se usa para ejecutar la action
                                quantity: 2
                                }
                            })
                    }
                >
                    Increment *2
                </button>
                <button 
                    onClick = {
                        () => dispatch({
                            type: DECREMENT,
                            payload: {
                                quantity: 1
                                }
                            })
                    }
                >
                    Decrement
                </button>
                <button 
                    onClick = {
                        () => dispatch({type: RESET})
                    }
                >
                    Reset Counter
                </button>
                
            </div>
        </myContext.Provider>
    );
}

export default Counter;
