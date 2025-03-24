import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;
const API_URL = import.meta.env.VITE_BACKEND_URL + "/blogs";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
    baseURL: baseURL,
});

export const getAllBlogPosts = async () => {
    try {
        const response = await api.get('/blogs');
        return response.data;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return []; // Or handle the error as needed
    }
};


export const fetchAllBlogs = async () => {
    try {
        const response = await api.get('/blogs');
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const fetchBlogById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    }
};


export const getAllAffiliateProducts = async () => {
    try {
        const response = await api.get('/affiliates/products');
        return response.data;
    } catch (error) {
        console.error("Error fetching affiliate products:", error);
        return [];
    }
};


export const fetchBlogPosts = async () => {
    try {
        let url = `${API_BASE_URL}/blogs`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error; // Re-throw for component to handle
    }
};

export const fetchAffiliateProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/affiliates/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching affiliate products:', error);
        throw error; // Re-throw for component to handle
    }
};


// export const getAllEmergencyContacts = async () => {
//     try {
//         const response = await api.get('/emergency-contacts');
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching emergency contacts:", error);
//         return [];
//     }
// };

// export const getNearestEmergencyContacts = async (latitude, longitude, category = 'all') => {
//     try {
//         let url = `${API_BASE_URL}/emergency-contacts/nearest?latitude=${latitude}&longitude=${longitude}&category=${category}`;

//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching nearest emergency contacts:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

export const getNearestEmergencyContacts = async (latitude, longitude, category = 'all') => {
    try {
        let url = `${API_BASE_URL}/emergency-contacts/nearest?latitude=${latitude}&longitude=${longitude}&category=${category}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching nearest emergency contacts:', error);
        throw error; // Re-throw for component to handle
    }
};

export const getAllEmergencyContacts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/emergency-contacts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching emergency contacts:", error);
        return [];
    }
};

export const getEmergencyContactById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/emergency-contacts/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching emergency contact:", error);
        return null;
    }
};

// export const getEmergencyContactById = async (id) => {
//     try {
//         const response = await api.get(`/emergency-contacts/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching emergency contact:", error);
//         return null;
//     }
// };

export const registerUser = async (username, email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json(); // Get error message from backend
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Re-throw for component to handle
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json(); // Get error message from backend
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error; // Re-throw for component to handle
    }
};

export const getMe = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Include the JWT token
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json(); // Get error message from backend
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting user data:', error);
        throw error; // Re-throw for component to handle
    }
};

export const createEmergencyContact = async (contactData) => {
    try {
        const token = localStorage.getItem('token'); //Get token
        const response = await fetch(`${API_BASE_URL}/emergency-contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Include the token
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating emergency contact:', error);
        throw error;
    }
};

//************************************************ */
// ADMIN PANEL //
//************************************************ */
// src/utils/api.js

// export const fetchBlogPosts = async ({ sortBy = 'publicationDate', filterCategory = 'all' }) => {
//     try {
//         let url = `${API_BASE_URL}/blogs?sortBy=${sortBy}&filterCategory=${filterCategory}`;
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching blog posts:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

// export const fetchAffiliateProducts = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/affiliates/products`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching affiliate products:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

// export const getNearestEmergencyContacts = async (latitude, longitude, category = 'all') => {
//     try {
//         let url = `${API_BASE_URL}/emergency-contacts/nearest?latitude=${latitude}&longitude=${longitude}&category=${category}`;
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching nearest emergency contacts:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

//Admin API calls
export const fetchAllEmergencyContacts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/emergency-contacts`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching emergency contacts:', error);
        throw error; // Re-throw for component to handle
    }
};

// export const createEmergencyContact = async (contactData) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/emergency-contacts`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(contactData),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error creating emergency contact:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

export const updateEmergencyContact = async (contactId, contactData) => {
    try {
        const token = localStorage.getItem('token'); // Get token from local storage

        console.log("Updating Contact ID:", contactId);
        console.log("Data being sent:", contactData); // Debug log

        const response = await fetch(`${API_BASE_URL}/emergency-contacts/${contactId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating emergency contact:', error);
        throw error;
    }
};


// export const updateEmergencyContact = async (contactId, contactData) => {
//     try {
//         const token = localStorage.getItem('token'); // Get token from local storage

//         const response = await fetch(`${API_BASE_URL}/emergency-contacts/${contactId}`, {
//             method: 'PUT',
//             headers: {
//                 'Authorization': `Bearer ${token}`, // Attach the token
//                 'Content-Type': 'application/json', // May be required, depending on the API
//             },
//             body: JSON.stringify(contactData),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error updating emergency contact:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

export const deleteEmergencyContact = async (contactId) => {
    try {
        const token = localStorage.getItem('token'); // Get token from local storage
        
        const response = await fetch(`${API_BASE_URL}/emergency-contacts/${contactId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // No data expected in response for delete
        return;
    } catch (error) {
        console.error('Error deleting emergency contact:', error);
        throw error; // Re-throw for component to handle
    }
};

// export const getAllBlogPosts = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/blogs`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching blogs:', error);
//         throw error; // Re-throw for component to handle
//     }
// };

export const createBlogPost = async (blogData) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/blogs`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
            body: JSON.stringify(blogData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating blog post:', error);
        throw error; // Re-throw for component to handle
    }
};

export const updateBlogPost = async (blogId, blogData) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
            body: JSON.stringify(blogData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating blog post:', error);
        throw error; // Re-throw for component to handle
    }
};

export const deleteBlogPost = async (blogId) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // No data expected in response for delete
        return;
    } catch (error) {
        console.error('Error deleting blog post:', error);
        throw error; // Re-throw for component to handle
    }
};

// export const getAllAffiliateProducts = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/affiliates/products`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching affiliate products:', error);
//         throw error;
//     }
// };

export const createAffiliateProduct = async (productData) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/affiliates/products`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating affiliate product:', error);
        throw error;
    }
};

export const updateAffiliateProduct = async (productId, productData) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/affiliates/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating affiliate product:', error);
        throw error;
    }
};

export const deleteAffiliateProduct = async (productId) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/affiliates/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return; // No data expected in response for delete
    } catch (error) {
        console.error('Error deleting affiliate product:', error);
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return; // No data expected in response for delete
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export const loginAdmin = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();  //Try and get error data
            throw new Error(errorData.message || `Login failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data.token; // Returns token, make sure your api sends it!
    } catch (error) {
        console.error('Admin login failed:', error);
        throw error;  //Re-throw so component can handle
    }
};

// export const getAdminDashboard = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/admin/dashboard`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching admin dashboard data:', error);
//         throw error;
//     }
// };

export const getAdminDashboard = async () => {
    try {
        const token = localStorage.getItem('adminToken'); // Get token from local storage

        const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Attach the token
                'Content-Type': 'application/json', // May be required, depending on the API
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching admin dashboard data:', error);
        throw error;
    }
};

export default api;