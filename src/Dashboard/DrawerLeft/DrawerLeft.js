import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'
const DrawerLeft = () => {
    const { user, role, logOut } = useAuth()
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
        navigate('/login')
    }
    return (
        <div >
            <Toolbar />
            <Divider />
            <List>
                <Link to="/">
                    <ListItem button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                {
                    role === 'admin' && <>
                        <Link to="/dashboard/manageProducts">
                            <ListItem button >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage Products" />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard/manageUserRole">
                            <ListItem button >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage User Role" />
                            </ListItem>
                        </Link>
                    </>

                }

                <ListItem button onClick={() => handleLogOut()}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>


            </List>
            <Divider />

        </div>
    );
};

export default DrawerLeft;