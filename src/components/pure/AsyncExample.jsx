import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1;
    }

    function obtainNumber(){
        generateNumber().then((response) => alert(`Response: ${response}`))
    }

    async function saveSessionStorage(key, value) {
        await sessionStorage.setItem(key, value);
    }

    return (
        <div>
            <button onClick={obtainNumber}>Obtain Numbar</button>
        </div>
    );
}

export default AsyncExample;
