import  Copyright  from '../../components/pure/copyright';
import Button  from '@mui/material/Button';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = () => {

    const history = useHistory();

    const logout = () => {
        history.push('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Hello world</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default Dashboard;
