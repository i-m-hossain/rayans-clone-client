import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm() {
    const { register, handleSubmit } = useForm();
    const { loginWithGoogle, loginWithEmail, isLoading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const onSubmit = data => {
        loginWithEmail(data.email, data.password, location, navigate)
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input
                    {...register("email", { required: true })}
                    placeholder="Your Email"
                    type="email"
                    className="w-50 mb-3 p-2" />
                <br />
                <input
                    {...register("password", { required: true })}
                    type="password"
                    className="w-50 mb-3 p-2"
                    placeholder="Your Password"
                />
                <br />
                <p>Forgot Password?</p>
                <input
                    type="submit"
                    value={isLoading ? 'Loading..' : 'Login'}
                    className="bg-success text-light px-5 py-3 border-0 rounded"
                />
            </form>
            <div className="d-flex flex-column flex-md-row justify-content-center mt-3">
                <div
                    className="bg-warning p-2 rounded mx-2 my-2 "
                    style={{ cursor: 'pointer' }}
                    onClick={() => loginWithGoogle(location, navigate)}
                >
                    Sign in with google
                </div>
                <div
                    className="bg-primary p-2 rounded mx-2 my-2 text-light"
                    style={{ cursor: 'pointer' }}
                >
                    Sign in with Facebook
                </div>
                <div
                    className="bg-secondary p-2 rounded mx-2 my-2 text-light "
                    style={{ cursor: 'pointer' }}
                >
                    Sign in with Github
                </div>
            </div>
        </>
    );
}