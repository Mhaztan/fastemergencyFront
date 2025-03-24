// src/admin/components/ContactManagement.jsx
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import { fetchAllEmergencyContacts, createEmergencyContact, updateEmergencyContact, deleteEmergencyContact } from '../../utils/api'; // Adjust path

function ContactManagement() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false); // Dialog open state
    const [formData, setFormData] = useState({ // Form Data
        Category: '',
        ContactName: '',
        PhoneNumber: '',
        Address: '',
        Latitude: '',
        Longitude: '',
        City: '',
        State: '',
        Country: ''
    });
    const [isEdit, setIsEdit] = useState(false); // Are we editing?
    const [selectedRow, setSelectedRow] = useState(null); // Selected row


    useEffect(() => {
        const getContacts = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchAllEmergencyContacts(); // Use API call
                setContacts(data);
            } catch (err) {
                console.error('Error fetching contacts:', err);
                setError('Failed to load contacts.');
            } finally {
                setLoading(false);
            }
        };
        getContacts();
    }, []);

    const columns = [
        { field: 'ContactID', headerName: 'ID', width: 70 },
        { field: 'Category', headerName: 'Category', width: 130 },
        { field: 'ContactName', headerName: 'Name', width: 200 },
        { field: 'PhoneNumber', headerName: 'Phone', width: 150 },
        { field: 'City', headerName: 'City', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.ContactID)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    const handleClickOpen = () => {
        setOpen(true);
        setIsEdit(false);
        setFormData({  //Reset form
            Category: '',
            ContactName: '',
            PhoneNumber: '',
            Address: '',
            Latitude: '',
            Longitude: '',
            City: '',
            State: '',
            Country: ''
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {
        try {
            await createEmergencyContact(formData);  // Api call
            //Refresh grid
            const data = await fetchAllEmergencyContacts();
            setContacts(data);
            handleClose(); //Close Dialog
        } catch (err) {
            console.error('Error adding emergency contact:', err);
            setError('Failed to add contact.');
        }
    };

    const handleEdit = (row) => {
        setOpen(true);
        setIsEdit(true);
        setSelectedRow(row); // Store selected row
        setFormData(row);  //Populate form with row data
    };

    // const handleUpdate = async () => {
    //     try {
    //         await updateEmergencyContact(selectedRow.ContactID, formData);  // Api call
    //         //Refresh grid
    //         const data = await fetchAllEmergencyContacts();
    //         setContacts(data);
    //         handleClose(); //Close Dialog
    //     } catch (err) {
    //         console.error('Error updating emergency contact:', err);
    //         setError('Failed to update contact.');
    //     }
    // };

    const handleUpdate = async () => {
        console.log("Selected Row:", selectedRow); // Check if it exists
        if (!selectedRow?.ContactID) {
            console.error("Invalid ContactID!");
            return;
        }

        try {
            await updateEmergencyContact(selectedRow.ContactID, formData);
            const data = await fetchAllEmergencyContacts();
            setContacts(data);
            handleClose();
        } catch (err) {
            console.error('Error updating emergency contact:', err);
            setError('Failed to update contact.');
        }
    };



    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            try {
                await deleteEmergencyContact(id);  // Api call
                //Refresh grid
                const data = await fetchAllEmergencyContacts();
                setContacts(data);
            } catch (err) {
                console.error('Error deleting emergency contact:', err);
                setError('Failed to delete contact.');
            }
        }
    };

    if (loading) {
        return <div>Loading contacts...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Add Contact
            </Button>
            <DataGrid
                rows={contacts}
                columns={columns}
                getRowId={(row) => row.ContactID}  // Make sure this is unique!
                loading={loading}
                components={{
                    Toolbar: GridToolbar,  // Add a toolbar for filtering etc
                }}
            />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{isEdit ? "Edit Contact" : "Add Contact"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Category"
                        name="Category"
                        label="Category"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Category}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="ContactName"
                        name="ContactName"
                        label="Contact Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.ContactName}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.PhoneNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Address"
                        name="Address"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Address}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Latitude"
                        name="Latitude"
                        label="Latitude"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={formData.Latitude}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Longitude"
                        name="Longitude"
                        label="Longitude"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={formData.Longitude}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="City"
                        name="City"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.City}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="State"
                        name="State"
                        label="State"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.State}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Country"
                        name="Country"
                        label="Country"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Country}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={isEdit ? handleUpdate : handleAdd}>{isEdit ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default ContactManagement;