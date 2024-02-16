import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname);

    const goToPath = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>
                Home Page
            </h1>
            <div>
            <button onClick={() => goToPath('/profile')}>
                    Go to Profile
                </button>
                <button onClick={() => goToPath('/about')}>
                    Go to About | FAQs
                </button>
            </div>
        </div>
    );
}

export default HomePage;
