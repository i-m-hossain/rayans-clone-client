import axios from 'axios';
import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddUserRole = ({ setIsUserRoleUpdated, handleClose, show }) => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newUser = {
            email: data.email,
            role: data.role
        }
        if (user.email !== data.email) {
            axios.put(`https://cryptic-cove-84874.herokuapp.com/users?requester=${user?.email}`, newUser)
                .then(res => {
                    if (res.data.modifiedCount) {
                        setIsUserRoleUpdated(true)
                        alert('user role modified')
                        handleClose(true)
                        reset()
                    }
                    setIsUserRoleUpdated(false)
                })
                .catch(err => alert(err));
        } else {
            alert("you can't change your role by yourself")
        }

    };

    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton>
                <Modal.Title>Edit User Role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register("email", { required: true })}
                            />

                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Choose role</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                {...register("role", { required: true })}
                            >
                                <option value="admin">admin</option>
                                <option value="user">user</option>
                                <option value="editor">editor</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="mb-3">
                        <Button variant="primary" type="submit">
                            Update role
                        </Button>
                    </div>
                </form>

            </Modal.Body>

        </Modal>
    );
};

export default AddUserRole;