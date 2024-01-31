import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); //Nos va a devolver la ruta '/about' o '/faqs'

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
                About | FAQs Page
            </h1>
            <div>
                <button onClick={() => goToPath('/')}>
                    Go to Home
                </button>
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

export default AboutPage;
