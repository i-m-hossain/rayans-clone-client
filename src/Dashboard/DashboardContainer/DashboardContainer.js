import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import DrawerLeft from '../DrawerLeft/DrawerLeft';
import AppBarTop from '../AppBarTop/AppBarTop';
import DrawerContainer from '../DrawerContainer/DrawerContainer';
import Dashboard from '../Dashboard';

export const drawerWidth = 200;

function DashboardContainer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = <DrawerLeft></DrawerLeft>
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarTop
                handleDrawerToggle={handleDrawerToggle}>
            </AppBarTop>
            <DrawerContainer
                container={container}
                drawer={drawer}
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
                drawerWidth={drawerWidth}>
            </DrawerContainer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Dashboard></Dashboard>
            </Box>
        </Box>
    );
}

DashboardContainer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardContainer;
