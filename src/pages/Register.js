import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import { Link } from 'react-router-dom';
import { Background } from '../style';

const Register = () => {
    return (
        <>
        <Background />
        <div className="outline">
            <RegisterForm />
            <Link to="/" className="xjy">Already have an account? Login</Link>
        </div>
        </>
    )
}

export default Register;
