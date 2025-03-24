import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import "./styles/submitForm.css";
import { createEmergencyContact } from "../utils/api"; // Import API function

const SubmitForm = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [category, setCategory] = useState("police");
    const [contactName, setContactName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [city, setCity] = useState("");
    const [state, setStateValue] = useState(""); // Corrected: useState instead of useStateValue
    const [country, setCountry] = useState("Nigeria");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
        setMessage(''); // Clear any previous messages
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous message

        try {
            const contactData = {
                category,
                contactName,
                phoneNumber,
                address,
                latitude,
                longitude,
                city,
                state: setStateValue,
                country,
            };
            await createEmergencyContact(contactData);

            setMessageType("success");
            setMessage("Contact submitted successfully! Thank you for your contribution.");
            //Clear form after submitting
            setCategory("police");
            setContactName("");
            setPhoneNumber("");
            setAddress("");
            setLatitude("");
            setLongitude("");
            setCity("");
            setStateValue("");
            setCountry("Nigeria");


        } catch (error) {
            setMessageType("error");
            setMessage(error.message || "Failed to submit contact. Please try again.");
        }
    };

    return (
        <>
            <div className="live-chat">
                <button className="chat-button" onClick={toggleForm}>
                    <FaComments className="chat-icon" />
                    Submit a contact
                </button>
            </div>

            <div className={`side-form ${isFormOpen ? "open" : ""}`}>
                <button className="close-button" onClick={toggleForm}>
                    <FaTimes />
                </button>

                <h2>Submit Emergency Contact</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                            <option value="police">Police</option>
                            <option value="hospital">Hospital</option>
                            <option value="fire">Fire Service</option>
                            <option value="roadside">Roadside Assistance</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactName">Contact Name:</label>
                        <input type="text" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="latitude">Latitude:</label>
                        <input type="number" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="longitude">Longitude:</label>
                        <input type="number" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" value={state} onChange={(e) => setStateValue(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                            <option value="Nigeria">Nigeria</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-button">Submit Contact</button>
                    {message && <div className={`message ${messageType}`}>{message}</div>}

                </form>
            </div>
        </>
    );
};

export default SubmitForm;