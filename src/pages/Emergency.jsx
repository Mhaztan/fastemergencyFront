// src/pages/Emergency.jsx
import React, { useState, useEffect } from 'react';
import './styles/emergency.css';
import { getAllEmergencyContacts } from '../utils/api';
import { Link } from 'react-router-dom';

function Emergency() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('ContactName'); // Default sorting
    const [filterCategory, setFilterCategory] = useState('all'); // Default filter
    const [filterState, setFilterState] = useState('');    // New state filter
    const [filterCity, setFilterCity] = useState('');      // New city filter

    useEffect(() => {
        const fetchContacts = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAllEmergencyContacts();
                // Apply sorting and filtering on the client-side
                let sortedAndFilteredContacts = [...data];

                // Apply filtering
                if (filterCategory !== 'all') {
                    sortedAndFilteredContacts = sortedAndFilteredContacts.filter(
                        (contact) => contact.Category === filterCategory
                    );
                }

                if (filterState !== '') {
                    sortedAndFilteredContacts = sortedAndFilteredContacts.filter(
                        (contact) => contact.State && contact.State.toLowerCase().includes(filterState.toLowerCase())
                    );
                }

                if (filterCity !== '') {
                    sortedAndFilteredContacts = sortedAndFilteredContacts.filter(
                        (contact) => contact.City && contact.City.toLowerCase().includes(filterCity.toLowerCase())
                    );
                }

                // Apply sorting
                sortedAndFilteredContacts.sort((a, b) => {
                    let comparison = 0;

                    if (sortBy === 'ContactName') {
                        comparison = a.ContactName.localeCompare(b.ContactName);
                    } else if (sortBy === 'Category') {
                        comparison = a.Category.localeCompare(b.Category);
                    } else if (sortBy === 'State') {
                        comparison = (a.State || '').localeCompare(b.State || ''); // handles null or undefined
                    } else if (sortBy === 'City') {
                        comparison = (a.City || '').localeCompare(b.City || ''); // handles null or undefined
                    }
                    return comparison;
                });

                setContacts(sortedAndFilteredContacts);
            } catch (err) {
                console.error('Error fetching emergency contacts:', err);
                setError('Failed to load emergency contacts.');
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
    }, [sortBy, filterCategory, filterState, filterCity]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterCategory(e.target.value);
    };

    const handleStateChange = (e) => {
        setFilterState(e.target.value);
    };

    const handleCityChange = (e) => {
        setFilterCity(e.target.value);
    };


    if (loading) {
        return <div className="loading">Loading emergency contacts...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="emergencyPage">
            <nav className="emergencyHeader">
                <h1>Emergency Services</h1>
                <div className="controls">
                    <div className="sort">
                        <label htmlFor="sortBy">Sort by:</label>
                        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
                            <option value="ContactName">Name</option>
                            <option value="Category">Category</option>
                            <option value="State">State</option>
                            <option value="City">City</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="filterCategory">Category:</label>
                        <select id="filterCategory" value={filterCategory} onChange={handleFilterChange}>
                            <option value="all">All</option>
                            <option value="police">Police</option>
                            <option value="hospital">Hospital</option>
                            <option value="fire">Fire Service</option>
                            <option value="roadside">Roadside Assistance</option>
                        </select>
                    </div>

                    <div className="filter">
                        <label htmlFor="filterState">State:</label>
                        <input
                            type="text"
                            id="filterState"
                            placeholder="Enter State"
                            value={filterState}
                            onChange={handleStateChange}
                        />
                    </div>

                    <div className="filter">
                        <label htmlFor="filterCity">City:</label>
                        <input
                            type="text"
                            id="filterCity"
                            placeholder="Enter City"
                            value={filterCity}
                            onChange={handleCityChange}
                        />
                    </div>
                </div>
            </nav>
            <main className="emergencyContent">
                {contacts.length === 0 ? (
                    <div className="noContacts">No emergency contacts found.</div>
                ) : (
                    <ul className="contactList">
                        {contacts.map((contact) => (
                            <li key={contact.ContactID} className="contactItem">
                                <h3>{contact.ContactName}</h3>
                                <p>Category: {contact.Category}</p>
                                <p>Phone: {contact.PhoneNumber}</p>
                                <Link to={`/emergency/${contact.ContactID}`} className="detailsLink">
                                    View Details
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
}

export default Emergency;