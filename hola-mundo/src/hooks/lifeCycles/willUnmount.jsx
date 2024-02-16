// Ejemplo de componentWillUnmount en componente de clase y componente funcional
import React, { Component, useEffect } from 'react'

export class willUnmount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        //Aquí no ponemos nada porque lo ponemos en el return.
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}



