import React, { useState } from 'react';
import { Logo } from '../../StyledComponents/Logo';
import Register from './Register/Register';
import LoginForm from './Login/LoginForm'
import { Container } from "react-bootstrap";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <Container className="p-5  ">
            <Logo
                className="py-3 px-5 rounded mb-3"
            >
                Ryans Clone
            </Logo>
            <div className="border bg-light py-3 my-5 rounded">
                <div
                    className="mx-auto d-flex justify-content-around w-50 border mb-3  mt-4"
                >
                    <div
                        className="w-50 p-2 text-light"
                        style={{ cursor: 'pointer', backgroundColor: isLogin ? 'green' : 'white' }}
                        onClick={e => setIsLogin(true)}
                    >
                        <button className=" bg-transparent border-0" >Login</button>
                    </div>
                    <div
                        className="w-50 p-2"
                        style={{ cursor: 'pointer', backgroundColor: isLogin ? '' : 'green' }}
                        onClick={e => setIsLogin(false)}
                    >
                        <button
                            className="bg-transparent border-0"
                        >
                            Register
                        </button>
                    </div>
                </div>
                {
                    isLogin && <LoginForm></LoginForm>
                }
                {
                    isLogin === false && <Register></Register>
                }
            </div>
        </Container>
    );
};

export default Login;