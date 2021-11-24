import React, { useState } from "react";
import { useForm } from "react-hook-form";


export default function LoginForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input
                    {...register("Email", { required: true })}
                    placeholder="Your Email"
                    className="w-50 mb-3 p-2" />
                <br />
                <input
                    {...register("password", { required: true })}
                    className="w-50 mb-3 p-2"
                    placeholder="Your Password"
                />
                <br />
                <p>Forgot Password?</p>
                <input
                    type="submit"
                    value="Login"
                    className="bg-success text-light px-5 py-2 border-0 rounded"
                />
            </form>
            <div className="d-flex flex-column flex-md-row justify-content-center mt-3">
                <div
                    className="bg-warning p-2 rounded mx-2 my-2"
                >
                    Sign in with google
                </div>
                <div
                    className="bg-primary p-2 rounded mx-2 my-2 text-light"
                >
                    Sign in with Facebook
                </div>
                <div
                    className="bg-secondary p-2 rounded mx-2 my-2 text-light "
                >
                    Sign in with Github
                </div>
            </div>
        </>
    );
}