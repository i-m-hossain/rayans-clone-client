import * as React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from "axios"
import { Link } from 'react-router-dom';

export default function DashboardTable({ isProductAdded, handleShow }) {
    const [products, setProducts] = useProducts(isProductAdded)
    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure want to delete?')
        if (confirm) {
            axios.delete(`http://localhost:5000/products/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restProducts = products.filter(product => product._id !== id);
                        setProducts(restProducts)
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
                        <Button className="btn btn-success " onClick={handleShow}>Add product</Button>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table hover  >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td>
                                        <img src={product.image ? `data:image/jpeg;base64,${product.image}` : ''}
                                            width="60"
                                            alt=""
                                        />
                                    </td>
                                    <td>${product.price}</td>
                                    <td>
                                        <Link to={`/dashboard/editProduct/${product._id}`}>
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
                                            onClick={() => handleDelete(product._id)}
                                        />
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div >
    );
}