import axios from "axios";
import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddProduct({ setIsProductAdded, handleClose, show }) {
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
                    setIsProductAdded(true)
                    reset()
                    alert('product is successfully added')
                    handleClose(true)
                }
            })
            .catch(err => alert(err));
    };

    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                    <div>
                        <input {...register("title", { required: true })} className="mb-2 p-2 w-100" placeholder="title" />
                    </div>

                    <div>
                        <textarea {...register("short_des", { required: true })} name="short_des" className="w-100" id="" rows="5" placeholder="short description"></textarea>
                    </div>

                    <div>
                        <input type="number" {...register("price", { required: true })} className="mb-2 p-2 w-100 " placeholder="product price" />
                    </div>

                    <div >
                        <input type="file" {...register("image")} className="form-control mb-2 p-2  mx-auto" id="inputGroupFile02" />
                    </div>
                    <input type="submit" value="Add product" className="bg-warning border-0 px-3 py-2 mx-auto rounded" />
                </form>

            </Modal.Body>

        </Modal>
    );
}