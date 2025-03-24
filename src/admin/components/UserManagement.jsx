// src/admin/components/UserManagement.jsx
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Switch, FormControlLabel } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
    getAllUsers,
    updateUser,  // Assuming update user exists in your API.js
    deleteUser,
} from '../../utils/api'; // Adjust path

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false); // Dialog open state
    const [formData, setFormData] = useState({ // Form Data
        Username: '',
        Email: '',
        Role: 'user', //Default
        IsBanned: false
    });
    const [isEdit, setIsEdit] = useState(false); // Are we editing?
    const [selectedRow, setSelectedRow] = useState(null); // Selected row

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to load users.');
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    const columns = [
        { field: 'UserID', headerName: 'ID', width: 70 },
        { field: 'Username', headerName: 'Username', width: 150 },
        { field: 'Email', headerName: 'Email', width: 200 },
        { field: 'Role', headerName: 'Role', width: 100 },
        {
            field: 'IsBanned',
            headerName: 'Banned',
            width: 80,
            renderCell: (params) => (
                <Switch
                    checked={params.row.IsBanned}
                    onChange={() => handleBanToggle(params.row)}
                />
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.UserID)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    //Dialog Functions
    // const handleClickOpen = () => {
    //     setOpen(true);
    //     setIsEdit(false);
    //     setFormData({  //Reset Form
    //         Username: '',
    //         Email: '',
    //         Role: 'user',
    //         IsBanned: false
    //     });
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBanToggle = async (row) => {
        try {
            await updateUser(row.UserID, { IsBanned: !row.IsBanned });
            const data = await getAllUsers();
            setUsers(data);
        } catch (err) {
            console.error('Error toggling user ban:', err);
            setError('Failed to toggle user ban.');
        }
    };


    const handleEdit = (row) => {
        setOpen(true);
        setIsEdit(true);
        setSelectedRow(row); // Store selected row
        setFormData(row);  //Populate form with row data
    };

    const handleUpdate = async () => {
        try {
            await updateUser(selectedRow.UserID, formData);
            //Refresh grid
            const data = await getAllUsers();
            setUsers(data);
            handleClose(); //Close Dialog
        } catch (err) {
            console.error('Error updating user:', err);
            setError('Failed to update user.');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(id);
                //Refresh grid
                const data = await getAllUsers();
                setUsers(data);
            } catch (err) {
                console.error('Error deleting user:', err);
                setError('Failed to delete user.');
            }
        }
    };



    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
            {/*<Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Add User
        </Button>  Commented out. Do you want admin to be able to add a user?*/}
            <DataGrid
                rows={users}
                columns={columns}
                getRowId={(row) => row.UserID}  // Make sure this is unique!
                loading={loading}
                components={{
                    Toolbar: GridToolbar,  // Add a toolbar for filtering etc
                }}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{isEdit ? "Edit User" : "Add User"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Username"
                        name="Username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Email"
                        name="Email"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Email}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>{isEdit ? "Update" : "Add"}</Button>  {/* Remove handleAdd */}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default UserManagement;