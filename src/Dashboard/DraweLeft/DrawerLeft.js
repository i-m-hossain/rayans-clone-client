import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar'
const DrawerLeft = () => {
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to="/dashboard/addProduct">
                    <ListItem button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItem>
                </Link>
                <Link to="/dashboard/manageProducts">
                    <ListItem button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Products" />
                    </ListItem>
                </Link>

            </List>
            <Divider />

        </div>
    );
};

export default DrawerLeft;