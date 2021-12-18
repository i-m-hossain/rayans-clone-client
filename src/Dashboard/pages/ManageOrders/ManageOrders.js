import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [isStatusModified, setIsStatusModified] = useState(false)

    useEffect(() => {
        fetch(` https://cryptic-cove-84874.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })


    }, [user, isStatusModified])
    const handleOrderStatus = (id, status) => {

        axios.put(` https://cryptic-cove-84874.herokuapp.com/orders/${id}`, { status: status === 'shipped' ? 'pending' : 'shipped' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setIsStatusModified(!isStatusModified)
                }
            })
    }
    const handleCancelOrder = (id) => {
        const confirm = window.confirm("Are you sure want to cancel the order?")
        if (confirm) {
            axios.delete(` https://cryptic-cove-84874.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restOrders = orders.filter(item => item._id !== id)
                        setOrders(restOrders)
                        alert('Order cancel success')
                    }
                })
        }
    }
    console.log(orders);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Order Status</th>
                    <th>Cancel order</th>
                </tr>
            </thead>
            <tbody>

                {orders.length > 0 ?
                    orders?.map((item, index) => <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.product_title}</td>
                        <td>${item.product_price}</td>
                        <td>
                            <Button
                                title="click me to change status"
                                onClick={() => handleOrderStatus(item._id, item.status)} >

                                {
                                    (item.status ? item.status : 'pending')

                                }

                            </Button>
                        </td>
                        <td>
                            <Button
                                onClick={() => handleCancelOrder(item._id)}
                                className="btn btn-danger">Cancel order</Button></td>
                    </tr>)
                    :
                    <h2 className="text-center m-5">No orders found</h2>
                }



            </tbody>
        </Table>
    );
};

export default ManageOrders;