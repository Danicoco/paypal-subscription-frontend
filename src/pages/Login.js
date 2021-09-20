import React, { useState, useEffect } from 'react';
import LoginForm from '../components/forms/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../redux/actions/AuthAction';
import { clearErrors } from '../redux/actions/ErrorAction';
import { Link } from 'react-router-dom';
import MessageAlert from '../components/MessageAlert';
import { Background } from '../style';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if(error.id === "SIGNIN_FAIL"){
            setLoading(false);
            setErr(error.msg);
        }

        return () => clearErrors();
    }, [error]);

    useEffect(() => {
        if(isAuthenticated){
            setLoading(false);
            window.location.href = "/dashboard";
        }
    }, [isAuthenticated]);

    const onFinish = (values) => {
        setErr(null);
        setLoading(true);
        dispatch(signIn(values));
    }

    return (
        <>
        <Background />
        <div className="outline">
            <div className="my-3">
                {err && (<MessageAlert type="error" message={err} />)}
                {loading && (<MessageAlert type="info" message={"Checking your credentials..."} />)}
                <LoginForm onFinish={onFinish} loading={loading} />
                <Link to="/register" className="xjy">Don't have an account yet? Register</Link>
            </div>
        </div>
        </>
    )
}

export default Login
