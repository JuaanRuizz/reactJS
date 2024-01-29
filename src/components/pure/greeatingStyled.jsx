import React, {useState} from 'react';

//Definiendo estilos en constantes

//? Estilos para usuario logueado
const loggedStyle = {
    color: "blue"
};

// ? Estilo para usuario NO logueado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
};



const GreeatingStyled = (props) => {

    // Generamos un estado para el componente 
    // y así comprobar si el usuario esta o no loggeado 

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ? 
            greetingUser() //No olvidar los parentesis para ejecutar las funciones.
            :
            pleaseLogin()
        }
        <button onClick={() =>{
            console.log("Botón pulsado");
            setLogged(!logged);
        }}>
            { logged ? "Logout" : "Login"}
        </button>

        </div>
    );
}

export default GreeatingStyled;
