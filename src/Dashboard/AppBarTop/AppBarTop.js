import { IconButton, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { drawerWidth } from '../DashboardContainer/DashboardContainer';
const AppBarTop = ({ handleDrawerToggle }) => {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Ryans Clone
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default AppBarTop;