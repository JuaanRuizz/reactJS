import React from 'react';
import {useHistory} from 'react-router-dom'

const NotFoundPage = () => {

    const navigate = useHistory ();

    const goToPath = (path) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    }
    

    return (
        <div>
            <h1 color='blue'>
                404 - Page Not Found
            </h1>
            <div>
                <button onClick={() => goToPath ('/')}>Go Home</button>
                <button onClick={goBack}> Go back</button>
            </div>
        </div>
    );
}

export default NotFoundPage;
