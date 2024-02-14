 // Incremental ID for Todos
let nextTodoID = 0;

// Action Types:
//Volver las funciones constantes para importarlas y exportarlas (gestionarlas correctamente)
export const ADD_TODO = 'ADD_TODO'; 
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO Devuelve una acción 
 */
export const addTodo = (text) => {  //AGREGAR UNA TAREA
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++, //adición 
            text
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO  Devuelve una acción 
 */
export const toggleTodo = (id) => { 
    return {
        type: TOGGLE_TODO, //cambio de estado
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER Devuelve una acción 
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER, //filtro
        payload: {
            filter
        }
    }
}





