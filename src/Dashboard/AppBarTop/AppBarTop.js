import { IconButton, Toolbar, Button } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { drawerWidth } from '../DashboardContainer/DashboardContainer';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
const AppBarTop = ({ handleDrawerToggle }) => {
    const { user } = useAuth()
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: 'green'
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
                    <Box

                        style={{
                            display: 'block',
                            width: "100%",
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >

                        <Typography variant="h6">Ryans Clone Dashboard</Typography>
                        <div>
                            <Button variant="contained" style={{ backgroundColor: 'gray' }} >{user.displayName}</Button>

                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default AppBarTop;