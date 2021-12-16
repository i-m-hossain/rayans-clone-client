import * as React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from "axios"
import { Link } from 'react-router-dom';
import useCategories from '../../../hooks/useCategories';
import AddCategory from '../AddCategory/AddCategory';

export default function ManageCategory() {
    const [show, setShow] = React.useState(false);
    const [isCategoryAdded, setIsCategoryAdded] = React.useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { categories, setCategories } = useCategories(isCategoryAdded)
    console.log(categories)
    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure want to delete?')
        if (confirm) {
            axios.delete(`http://localhost:5000/categories/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restProducts = categories.filter(cat => cat._id !== id);
                        setCategories(restProducts)
                        alert('product is deleted successfully')
                    }
                })
        }
    }
    return (
        <div >
            <Card>
                <Card.Header>
                    <Card.Title className="float-end">
                        <Button className="btn btn-success" onClick={handleShow}>Add Category</Button>
                    </Card.Title>

                </Card.Header>
                <Card.Body>
                    <Table hover  >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((cat, index) => <tr key={cat._id}>
                                    <td>{index + 1}</td>
                                    <td>{cat?.cat_name}</td>

                                    <td>
                                        <Link to={`/dashboard/editCategory/${cat._id}`}>
                                            <BiEdit
                                                className="h1 text-primary p-2 rounded"
                                                title="Edit"
                                                style={{ cursor: "pointer" }}
                                            />
                                        </Link>
                                    </td>

                                    <td>
                                        <AiOutlineDelete
                                            className="h1  p-2 rounded text-danger " style={{ cursor: "pointer" }} title="Delete"
                                            onClick={() => handleDelete(cat._id)}
                                        />
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <AddCategory
                setIsCategoryAdded={setIsCategoryAdded}
                handleClose={handleClose}
                show={show}
            ></AddCategory>

        </div >
    );
}