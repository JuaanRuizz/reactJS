import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 170; 

//? Estilo para usuario logueado
const loggedStyle = {
    color: 'white',
    bacgroundcolor: `rgb(${red}, ${green}, ${blue})`,
    fontWeigth: 'bold'
};

//? Estilo para usuario no logueado
const unloggedStyle = {
    bacgroundcolor: 'tomato',
    color: 'white',
    fontWeigth: 'bold'
};


// Login / Logout buttons 
const LoginButton = ({ loginAction, propStyle }) => {
    return <button style={propStyle} onClick={loginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction, propStyle }) => {
    return <button style={propStyle} onClick={logoutAction}>Logout</button>;
};

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => No se renderiza la expresión


const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessages, sentNMessages] = useState (0);



    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    };

    const logoutAction = () => {
        setAccess(false);
    };


    let OptionalButton;
    // if(access) {
    //     OptionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     OptionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if (access) {
        OptionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>;
    } else {
        OptionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>;
    }

    // Unread messages
    let addMessages =() => {
        sentNMessages(nMessages + 1) 
    }

    return (
        <div>
            {/* Optional button */}
            {OptionalButton}
            {/* N messages unread */}
            {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}
            {/* Ternary Operator */}
            {nMessages > 0 ? 
            <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> : 
            <p>There are no new messages</p>}
            <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new message'}</button>
        </div>
    );
};

export default OptionalRender;
