

// import React, { useState } from "react";
// import { getAllEmergencyContacts } from "../utils/api";
// import { FaSearch, FaPhoneAlt } from "react-icons/fa";
// import "./styles/heroSection.css";

// const HeroSection = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleSearch = async () => {
//         if (!searchQuery.trim()) {
//             setSearchResults([]); // Clear results if search is empty
//             return;
//         }

//         setLoading(true);
//         try {
//             const allContacts = await getAllEmergencyContacts();
//             const results = allContacts.filter((contact) => {
//                 const nameMatch = contact.ContactName && contact.ContactName.toLowerCase().includes(searchQuery.toLowerCase());
//                 const phoneMatch = contact.PhoneNumber && contact.PhoneNumber.includes(searchQuery);
//                 return nameMatch || phoneMatch;
//             });
//             setSearchResults(results);
//         } catch (error) {
//             console.error("Error searching contacts:", error);
//             setSearchResults([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <section className="hero">
//             <div className="container-hero">
//                 <h1>Find Help in an Emergency</h1>
//                 <p>Quickly locate emergency contacts near you.</p>

//                 <div className="search-bar">
//                     <input
//                         type="text"
//                         placeholder="Search for emergency contacts..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button onClick={handleSearch}>
//                         <FaSearch className="search-icon" /> Find Help
//                     </button>
//                 </div>

//                 {loading && <p className="loading">Searching...</p>}

//                 {searchResults.length > 0 && (
//                     <div className="search-results">
//                         <h3>Search Results:</h3>
//                         <ul>
//                             {searchResults.map((contact) => (
//                                 <li key={contact.ContactID} className="search-result-item">
//                                     <FaPhoneAlt className="phone-icon" /> {contact.ContactName} -{" "}
//                                     <strong>{contact.PhoneNumber}</strong>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default HeroSection;

import React, { useState } from "react";
import { getAllEmergencyContacts } from "../utils/api";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import "./styles/heroSection.css";

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setSearchResults([]); // Clear results if search is empty
            return;
        }

        setLoading(true);
        try {
            const allContacts = await getAllEmergencyContacts();
            const results = allContacts.filter((contact) => {
                const searchTerm = searchQuery.toLowerCase(); // to lower
                const nameMatch = contact.ContactName && contact.ContactName.toLowerCase().includes(searchTerm);
                const phoneMatch = contact.PhoneNumber && contact.PhoneNumber.includes(searchQuery);
                const cityMatch = contact.City && contact.City.toLowerCase().includes(searchTerm);
                const stateMatch = contact.State && contact.State.toLowerCase().includes(searchTerm);

                return nameMatch || phoneMatch || cityMatch || stateMatch;
            });
            setSearchResults(results);
        } catch (error) {
            console.error("Error searching contacts:", error);
            setSearchResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="hero">
            <div className="container-hero">
                <h1>Find Help in an Emergency</h1>
                <p>Quickly locate emergency contacts near you.</p>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for emergency contacts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <FaSearch className="search-icon" /> Find Help
                    </button>
                </div>

                {loading && <p className="loading">Searching...</p>}

                {searchResults.length > 0 && (
                    <div className="search-results">
                        <h3>Search Results:</h3>
                        <ul>
                            {searchResults.map((contact) => (
                                <li key={contact.ContactID} className="search-result-item">
                                    <FaPhoneAlt className="phone-icon" /> {contact.ContactName} -{" "}
                                    <strong>{contact.PhoneNumber}</strong> (
                                    {contact.City}, {contact.State})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;