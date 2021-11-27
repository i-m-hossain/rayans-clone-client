import * as React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';

export default function DashboardTable({ isProductAdded, handleOpenForm }) {
    const [products] = useProducts(isProductAdded)
   
    return (
        <div >
            <Card>
                <Card.Header>
                    <Card.Title className="float-end">
                        <Button className="btn btn-success" onClick={()=>handleOpenForm(true)}>Add product</Button>
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
                                    <td><img src={product.image ? `data:image/jpeg;base64,${product.image}` : ''} width="60" alt="" /></td>
                                    <td>{product.price}</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    );
}