import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddProduct() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('title', data.title);
        formData.append('short_des', data.short_des);
        formData.append('price', data.price);
        formData.append('image', data.image[0]);
        axios.post('http://localhost:5000/products', formData)
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
                <div>
                    <input {...register("title", { required: true })} className="mb-2 p-2 w-25" placeholder="title" />
                </div>

                <div>
                    <textarea {...register("short_des", { required: true })} name="short_des" id="" rows="5" className="w-25" placeholder="short description"></textarea>
                </div>

                <div>
                    <input type="number" {...register("price", { required: true })} className="mb-2 p-2 w-25" placeholder="product price" />
                </div>

                <div >

                    <input type="file" {...register("image")} class="form-control" id="inputGroupFile02" className="mb-2 p-2 w-25" />
                </div>
                <input type="submit" value="Add product" className="bg-warning border-0 px-3 py-2" />
            </form>
        </div>
    );
}