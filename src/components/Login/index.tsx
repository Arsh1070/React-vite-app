

import  { useEffect } from 'react'
import { checkIfLogin } from '../../utils/sessionManagement';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (checkIfLogin()) {
            navigate('/');
        }
    }, [])
    return (
        <h1 style={{fontSize: "30px", marginTop: "30px"}}>Welcome at <span style={{color: "red"}}>React + Vite</span> project dashboard. Please click on button to login.</h1>
    )
};

export default Login;
