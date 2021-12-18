import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function EditCategory() {
    const [category, setCategory] = useState({})
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(` https://cryptic-cove-84874.herokuapp.com/categories/${id}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    // const 
    const onSubmit = data => {

        axios.put(` https://cryptic-cove-84874.herokuapp.com/categories/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('product is updated successfully')
                }

            })
            .catch(err => alert(err))
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <div>
                <input
                    {...register("cat_name", { required: true })} className="mb-2 p-2 w-100"
                    placeholder="category name"
                    defaultValue={category.cat_name}
                />
            </div>
            <input type="submit" value="Update Category" className="bg-warning border-0 px-3 py-2 mx-auto rounded" />
        </form>
    );
}