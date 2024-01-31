import React from 'react';
import {useNavigate} from 'react-router-dom'

const Profile = ({user}) => {

    const navigate = useNavigate();

    const goToPath = (path) => {
        navigate(path);
    };
    
    const goBack = () => {
        navigate(-1); // Esto es equivalente a history.goBack()
    };

    const goForward = () => {
        navigate(+1); // Esto equivale a history.goForward()
    }

    return (
        <div>
            <h1>
                Your Profile
            </h1>
            <div>
                <button onClick={goBack}>
                    Go back
                </button>
                <button onClick={goForward}>
                    Go forward
                </button>
            </div>
        </div>
    );
}

export default Profile;
