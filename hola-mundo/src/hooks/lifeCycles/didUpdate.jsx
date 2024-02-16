// Ejemplo de método componentDidUpdate en componente de clase y componente funcional

import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {

    componentDidUpdate(){
        console.log("comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }

    render() {
        return (
            <div>
                <h1>
                    didUpdate
                </h1>
            </div>
        )
    }
}



export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }); //Cuando no se deja ningún corchete es porque se quiere que se ejecute TODAS las veces en vez de solo una

    return (
        <div>
            
        </div>
    );
}


