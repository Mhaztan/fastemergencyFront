// // src/pages/EmergencyDetails.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './styles/emergency.css'; // Use the same emergency.css
// import { getEmergencyContactById } from '../utils/api'; // Import API function

// function EmergencyDetails() {
//     const { id } = useParams(); // Get the ID from the URL
//     const [contact, setContact] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchContact = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const data = await getEmergencyContactById(id);
//                 setContact(data);
//             } catch (err) {
//                 console.error('Error fetching emergency contact:', err);
//                 setError('Failed to load emergency contact details.');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchContact();
//     }, [id]); // Re-fetch when the ID changes

//     if (loading) {
//         return <div className="loading">Loading emergency contact details...</div>;
//     }

//     if (error) {
//         return <div className="error">{error}</div>;
//     }

//     if (!contact) {
//         return <div className="noContacts">Emergency contact not found.</div>;
//     }

//     return (
//         <div className="emergencyPage">
//             <header className="emergencyHeader">
//                 <h1>Emergency Contact Details</h1>
//             </header>
//             <main className="emergencyContent">
//                 <div className="contactDetails">
//                     <h3>{contact.ContactName}</h3>
//                     <p>Category: {contact.Category}</p>
//                     <p>Phone: {contact.PhoneNumber}</p>
//                     <p>Address: {contact.Address}</p>
//                     <p>Latitude: {contact.Latitude}</p>
//                     <p>Longitude: {contact.Longitude}</p>
//                     <p>City: {contact.City}</p>
//                     <p>State: {contact.State}</p>
//                     <p>Country: {contact.Country}</p>
//                     <Link to="/emergency" className="backButton">Back to List</Link>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default EmergencyDetails;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEmergencyContactById } from '../utils/api';
import { FaPhone, FaMapMarkerAlt, FaCity, FaGlobe, FaArrowLeft } from 'react-icons/fa'; // Import icons
import './styles/emergency.css';

function EmergencyDetails() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getEmergencyContactById(id);
                setContact(data);
            } catch (err) {
                console.error('Error fetching emergency contact:', err);
                setError('Failed to load emergency contact details.');
            } finally {
                setLoading(false);
            }
        };
        fetchContact();
    }, [id]);

    if (loading) return <div className="loading">Loading emergency contact details...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!contact) return <div className="noContacts">Emergency contact not found.</div>;

    return (
        <div className="emergencyPage">
            <main className="emergencyContent">
                <div className="contactDetails">
                    <h2 className="contactName">{contact.ContactName}</h2>
                    <p className="contactCategory"><strong>Category:</strong> {contact.Category}</p>
                    <p><FaPhone className="icon" /> <strong>Phone:</strong> {contact.PhoneNumber}</p>
                    <p><FaMapMarkerAlt className="icon" /> <strong>Address:</strong> {contact.Address}</p>
                    <p><FaCity className="icon" /> <strong>City:</strong> {contact.City}</p>
                    <p><FaGlobe className="icon" /> <strong>State:</strong> {contact.State}</p>
                    <p><FaGlobe className="icon" /> <strong>Country:</strong> {contact.Country}</p>
                    <p><FaMapMarkerAlt className="icon" /> <strong>Latitude:</strong> {contact.Latitude}, <strong>Longitude:</strong> {contact.Longitude}</p>

                    <Link to="/emergency" className="backButton">
                        <FaArrowLeft className="icon" /> Back to List
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default EmergencyDetails;
