import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddProduct() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const product = {
            title: data.title,
            short_des: data.short_des,
            price: data.price,
            image: data.image,
        }
        axios.post('http://localhost:5000/products', product)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    alert('product is successfully added')
                }
            })
            .catch(err => alert(err));
    };

    return (
        <div>
            <h2>Add a product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <input {...register("title", { required: true })} className="mb-2 p-2 w-25" placeholder="title" />
                <br />
                <textarea {...register("short_des", { required: true })} name="short_des" id="" rows="5" className="w-25" placeholder="short description"></textarea>
                <br />
                <input {...register("price", { required: true })} className="mb-2 p-2 w-25" placeholder="product price" />
                <br />
                <input {...register("image", { required: true })} className="mb-2 p-2 w-25" placeholder="Image url" />
                <br />


                <input type="submit" value="Add product" className="bg-warning border-0 px-3 py-2" />
            </form>
        </div>
    );
}