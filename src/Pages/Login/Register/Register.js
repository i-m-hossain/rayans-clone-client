import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
export default function Register() {
    const { loginWithGoogle, registerWithEmail, isLoading } = useAuth()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const onSubmit = data => {
        registerWithEmail(data.email, data.password, data.name, location, navigate)
    };

    return (
        < >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Your Email"
                    className="w-50 mb-3 p-2" />
                <br />
                <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your Name"
                    className="w-50 mb-3 p-2" />
                <br />
                <input
                    {...register("password", { required: true })}
                    type="password"
                    className="w-50 mb-3 p-2"
                    placeholder="Your Password"
                />
                <br />

                <input
                    type="submit"
                    value={isLoading ? 'Loading..' : 'Register'}
                    className="bg-success text-light px-5 py-2 border-0 rounded"
                />
            </form>
            <div className="d-flex justify-content-center mt-3">
                <div
                    className="bg-warning p-2 rounded me-3"
                    onClick={() => loginWithGoogle(location, navigate)}
                >
                    Sign in with google
                </div>
                <div
                    className="bg-primary p-2 rounded me-3 text-light"
                >
                    Sign in with Facebook
                </div>
                <div
                    className="bg-secondary p-2 rounded text-light "
                >
                    Sign in with Github
                </div>
            </div>

        </>
    );
}