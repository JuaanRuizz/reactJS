import React from 'react';

// Material UI components
import  Link  from '@mui/material/Link';
import  Typography  from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GreyText' align='center'>
            { 'Copyright (C)'}
            <Link color='inherit' href='https://imaginaformacion.com'> 
                Imagina Formación
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;
