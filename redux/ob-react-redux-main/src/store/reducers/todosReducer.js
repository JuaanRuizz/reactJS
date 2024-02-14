import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

// Initial TodosState
// Initialy todos is empty
let initialState = []; //Lista vacia


//Recibe un estado y una acción. Cuando se despache la acción éste lo va a escuchar y va a generar el switch case y va a devolver un estado cambiando algún campo o haciendo una operación sobre el mismo. 
export const todosReducer = (state=initialState, action) => {  
    
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, // Devuelve todo lo que había en el estado inicial 
                { //Añade un elemento nuevo
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => //Econtrar el elemento por ID 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
    
        default:
            return state; //devolvemos el estado. NO UN BRAKE
    }
}