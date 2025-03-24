// src/admin/components/BlogManagement.jsx
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import { getAllBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from '../../utils/api'; // Adjust path

function BlogManagement() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);  //Dialog State
    const [formData, setFormData] = useState({ //Form Data
        Title: '',
        Content: '',
        AuthorID: '',
        Category: '',
        PublicationDate: '',
        ScheduledDate: '',
        Status: ''
    });
    const [isEdit, setIsEdit] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);


    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAllBlogPosts(); // Use API call
                setBlogs(data);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to load blogs.');
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    const columns = [
        { field: 'PostID', headerName: 'ID', width: 70 },
        { field: 'Title', headerName: 'Title', width: 200 },
        { field: 'Category', headerName: 'Category', width: 130 },
        { field: 'PublicationDate', headerName: 'Publication Date', width: 150 },
        { field: 'Status', headerName: 'Status', width: 100 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.PostID)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    //Dialog Functions
    const handleClickOpen = () => {
        setOpen(true);
        setIsEdit(false);
        setFormData({  //Reset Form
            Title: '',
            Content: '',
            AuthorID: '',
            Category: '',
            PublicationDate: '',
            ScheduledDate: '',
            Status: ''
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
            await createBlogPost(formData);  // Api call
            //Refresh grid
            const data = await getAllBlogPosts();
            setBlogs(data);
            handleClose(); //Close Dialog
        } catch (err) {
            console.error('Error adding blog post:', err);
            setError('Failed to add blog post.');
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
            await updateBlogPost(selectedRow.PostID, formData);  // Api call
            //Refresh grid
            const data = await getAllBlogPosts();
            setBlogs(data);
            handleClose(); //Close Dialog
        } catch (err) {
            console.error('Error updating blog post:', err);
            setError('Failed to update blog post.');
        }
    };


    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            try {
                await deleteBlogPost(id);  // Api call
                //Refresh grid
                const data = await getAllBlogPosts();
                setBlogs(data);
            } catch (err) {
                console.error('Error deleting blog post:', err);
                setError('Failed to delete blog post.');
            }
        }
    };



    if (loading) {
        return <div>Loading blogs...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Add Blog Post
            </Button>
            <DataGrid
                rows={blogs}
                columns={columns}
                getRowId={(row) => row.PostID}  // Make sure this is unique!
                loading={loading}
                components={{
                    Toolbar: GridToolbar,  // Add a toolbar for filtering etc
                }}
            />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{isEdit ? "Edit Blog Post" : "Add Blog Post"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Title"
                        name="Title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Content"
                        name="Content"
                        label="Content"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Content}
                        onChange={handleChange}
                    />
                    <TextField
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
                        id="PublicationDate"
                        name="PublicationDate"
                        label="PublicationDate"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.PublicationDate}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="ScheduledDate"
                        name="ScheduledDate"
                        label="ScheduledDate"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.ScheduledDate}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="Status"
                        name="Status"
                        label="Status"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.Status}
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

export default BlogManagement;