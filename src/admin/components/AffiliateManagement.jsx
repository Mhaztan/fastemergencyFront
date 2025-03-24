// src/admin/components/AffiliateManagement.jsx
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import {
  getAllAffiliateProducts,
  createAffiliateProduct,
  updateAffiliateProduct,
  deleteAffiliateProduct,
} from '../../utils/api'; // Adjust path

function AffiliateManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);  //Dialog State
  const [formData, setFormData] = useState({ //Form Data
    ProductName: '',
    Description: '',
    ImageUrl: '',
    Price: '',
    AliExpressLink: '',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllAffiliateProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching affiliate products:', err);
        setError('Failed to load affiliate products.');
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const columns = [
    { field: 'ProductID', headerName: 'ID', width: 70 },
    { field: 'ProductName', headerName: 'Product Name', width: 200 },
    { field: 'Price', headerName: 'Price', width: 100 },
    { field: 'AliExpressLink', headerName: 'AliExpress Link', width: 300 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.ProductID)}>
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
      ProductName: '',
      Description: '',
      ImageUrl: '',
      Price: '',
      AliExpressLink: '',
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
      await createAffiliateProduct(formData);
      //Refresh grid
      const data = await getAllAffiliateProducts();
      setProducts(data);
      handleClose(); //Close Dialog
    } catch (err) {
      console.error('Error adding affiliate product:', err);
      setError('Failed to add affiliate product.');
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
      await updateAffiliateProduct(selectedRow.ProductID, formData);
      //Refresh grid
      const data = await getAllAffiliateProducts();
      setProducts(data);
      handleClose(); //Close Dialog
    } catch (err) {
      console.error('Error updating affiliate product:', err);
      setError('Failed to update affiliate product.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteAffiliateProduct(id);
        //Refresh grid
        const data = await getAllAffiliateProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error deleting affiliate product:', err);
        setError('Failed to delete affiliate product.');
      }
    }
  };

  if (loading) {
    return <div>Loading affiliate products...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ height: 500, width: '100%' }}>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add Affiliate Product
      </Button>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.ProductID}  // Make sure this is unique!
        loading={loading}
        components={{
          Toolbar: GridToolbar,  // Add a toolbar for filtering etc
        }}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEdit ? "Edit Affiliate Product" : "Add Affiliate Product"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="ProductName"
            name="ProductName"
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.ProductName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="Description"
            name="Description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={formData.Description}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="ImageUrl"
            name="ImageUrl"
            label="Image URL"
            type="text"
            fullWidth
            variant="standard"
            value={formData.ImageUrl}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="Price"
            name="Price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={formData.Price}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="AliExpressLink"
            name="AliExpressLink"
            label="AliExpress Link"
            type="text"
            fullWidth
            variant="standard"
            value={formData.AliExpressLink}
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

export default AffiliateManagement;