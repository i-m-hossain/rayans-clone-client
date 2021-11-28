import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const EditProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('title', data.title);
        formData.append('short_des', data.short_des);
        formData.append('price', data.price);
        formData.append('image', data.image[0]);
        axios.put(`http://localhost:5000/products/${id}`, formData)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('product is updated successfully')
                }
            })
            .catch(err => alert(err));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <div>
                    <input
                        {...register("title", { required: true })}
                        className="mb-2 p-2 w-100"
                        placeholder="title"
                        defaultValue={product?.title}
                    />
                </div>

                <div>
                    <textarea
                        {...register("short_des", { required: true })}
                        name="short_des"
                        className="w-100"
                        id="" rows="5"
                        placeholder="short description"
                        defaultValue={product?.short_des}
                    >

                    </textarea>
                </div>

                <div>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        className="mb-2 p-2 w-100 "
                        placeholder="product price"
                        defaultValue={product?.price}
                    />
                </div>

                <div >
                    <img src={product.image ? `data:image/jpeg;base64,${product?.image}` : ''}
                        width="60"
                        alt=""
                        className="float-start"
                        title={product.title}
                    />
                    <input type="file" {...register("image")} className="form-control mb-2 p-2  mx-auto" id="inputGroupFile02" />
                </div>
                <input type="submit" value="Update product" className="bg-warning border-0 px-3 py-2 mx-auto rounded" />
            </form>
        </div>
    );
};

export default EditProduct;