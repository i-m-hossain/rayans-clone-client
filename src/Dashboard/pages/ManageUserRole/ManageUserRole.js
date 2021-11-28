import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddUserRole from './AddUserRole/AddUserRole';
import UserTable from './UserTable/UserTable';

const ManageUserRole = () => {
    const [isUserRoleUpdated, setIsUserRoleUpdated] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <Row>
                <UserTable 
                    isUserRoleUpdated={isUserRoleUpdated} 
                    handleShow={handleShow} 
                    setIsUserRoleUpdated={setIsUserRoleUpdated}
                    ></UserTable>
                <AddUserRole setIsUserRoleUpdated={setIsUserRoleUpdated} handleClose={handleClose} show={show}></AddUserRole>
            </Row>
        </Container>

    );
};

export default ManageUserRole;