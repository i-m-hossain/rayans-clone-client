
import axios from "axios";
import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddCategory({ isCategoryAdded, setIsCategoryAdded, handleClose, show }) {
    const { register, handleSubmit, reset } = useForm();
    // const 
    const onSubmit = data => {
        axios.post(' https://cryptic-cove-84874.herokuapp.com/categories', data)
            .then(res => {
                if (res.data.insertedId) {
                    setIsCategoryAdded(!isCategoryAdded)
                    reset()
                    alert('product is successfully added')
                    handleClose(true)
                }
            })
            .catch(err => alert(err))
    };

    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                    <div>
                        <input {...register("cat_name", { required: true })} className="mb-2 p-2 w-100" placeholder="category name" />
                    </div>
                    <input type="submit" value="Add Category" className="bg-warning border-0 px-3 py-2 mx-auto rounded" />
                </form>

            </Modal.Body>

        </Modal>
    );
}