// src/admin/Admin.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContactManagement from './components/ContactManagement';
import BlogManagement from './components/BlogManagement';
import AffiliateManagement from './components/AffiliateManagement';
import UserManagement from './components/UserManagement';
import LoginForm from './components/LoginForm';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles'; //Import Theme
import CssBaseline from '@mui/material/CssBaseline';  //CssBaseline

function Admin() {
    const isAuthenticated = localStorage.getItem('adminToken') !== null;
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    //Theme
    const theme = createTheme({
        palette: {
            mode: 'dark', //or 'dark'
        },
    });

    if (!isAuthenticated) {
        return <LoginForm />;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="adminPanel">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Admin Panel
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        <ListItem button component={Link} to="/admin/dashboard" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/contacts" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Contacts" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/blogs" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Blogs" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/affiliates" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Affiliates" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/users" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <main className="adminContent">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/contacts" element={<ContactManagement />} />
                        <Route path="/blogs" element={<BlogManagement />} />
                        <Route path="/affiliates" element={<AffiliateManagement />} />
                        <Route path="/users" element={<UserManagement />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default Admin;