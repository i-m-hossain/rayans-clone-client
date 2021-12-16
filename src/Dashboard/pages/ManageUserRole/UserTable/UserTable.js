import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useUsers from '../../../../hooks/useUsers';
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';


const UserTable = ({ handleShow, isUserRoleUpdated }) => {
    const { user } = useAuth()
    const [users, setUsers] = useUsers(isUserRoleUpdated)
    const handleDelete = (id, email) => {
        if (user.email !== email) {
            const confirm = window.confirm('Are you sure want to delete')
            if (confirm) {
                axios.delete(`https://cryptic-cove-84874.herokuapp.com/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remainingUsers = users.filter(item => item._id !== id)
                            setUsers(remainingUsers);
                            alert('user is deleted successfully')
                        }
                    })
            }
        } else {
            alert('you cant delete yourself')
        }
    }
    return (
        <Card>
            <Card.Header>
                <Card.Title className="float-end">
                    <Button className="btn btn-success" onClick={handleShow}>Edit user role</Button>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Table hover  >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userItem, index) => <tr key={userItem._id}>
                                <td>{index + 1}</td>
                                <td>{userItem.displayName}</td>
                                <td>{userItem.email}</td>
                                <td>{userItem?.role}</td>

                                <td>
                                    <AiOutlineDelete
                                        className="h1  p-2 rounded text-danger " style={{ cursor: "pointer" }} title="Delete"
                                        onClick={() => handleDelete(userItem._id, userItem.email)}
                                    />
                                </td>

                            </tr>)
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default UserTable;