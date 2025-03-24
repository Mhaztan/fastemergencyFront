// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import "./styles/header.css";

// // const Header = () => {
// //     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //     const [searchQuery, setSearchQuery] = useState("");

// //     useEffect(() => {
// //         const handleResize = () => {
// //             setIsMobile(window.innerWidth <= 768);
// //         };

// //         window.addEventListener("resize", handleResize);
// //         return () => {
// //             window.removeEventListener("resize", handleResize);
// //         };
// //     }, []);

// //     const toggleSidebar = () => {
// //         setIsSidebarOpen(!isSidebarOpen);
// //     };


// //     return (
// //         <header>
// //             <div className="header-container">
// //                 {/* Logo */}
// //                 <div className="header-logo">
// //                     <Link to="/">Fastemergency</Link>
// //                 </div>

// //                 {/* Search Bar (Desktop) */}
// //                 {!isMobile && (
// //                     <div className="header-search-bar">
// //                         <input
// //                             type="text"
// //                             placeholder="Search..."
// //                             value={searchQuery}
// //                             onChange={(e) => setSearchQuery(e.target.value)}
// //                         />
// //                         <button>🔍</button>
// //                     </div>
// //                 )}

// //                 {/* Navigation & Features */}
// //                 {isMobile ? (
// //                     <>
// //                         <button className="hamburger-button" onClick={toggleSidebar}>
// //                             ☰
// //                         </button>
// //                         <Sidebar
// //                             isOpen={isSidebarOpen}
// //                             onClose={toggleSidebar}
// //                         />
// //                     </>
// //                 ) : (
// //                     <nav className="header-nav">
// //                         <ul>
// //                             <li><Link to="/">Home</Link></li>
// //                             <li><Link to="/blogs">Blog</Link></li>

// //                             <li><Link to="/emergency">Emergency</Link></li>

// //                             <li><Link to="/shop">Shop</Link></li>
// //                             <li><Link to="/login">Login</Link></li>
// //                             <li><Link to="/signup">Signup</Link></li>
// //                         </ul>
// //                     </nav>
// //                 )}
// //             </div>
// //         </header>
// //     );
// // };

// // const Sidebar = ({ isOpen, onClose }) => {
// //     return (
// //         <div className={`sidebar ${isOpen ? "open" : ""}`}>
// //             <button className="sidebar-close-button" onClick={onClose}>×</button>

// //             {/* Search Bar (Mobile) */}
// //             <div className="sidebar-search-bar">
// //                 <input type="text" placeholder="Search..." />
// //                 <button>🔍</button>
// //             </div>

// //             <ul>
// //                 <li><Link to="/" onClick={onClose}>Home</Link></li>
// //                 <li><Link to="/blogs" onClick={onClose}>Blog</Link></li>
// //                 <li><Link to="/emergency" onClick={onClose}>Fire Emergency</Link></li>
// //                 <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
// //                 <li><Link to="/login" onClick={onClose}>Login</Link></li>
// //                 <li><Link to="/signup" onClick={onClose}>Signup</Link></li>
// //             </ul>
// //         </div>
// //     );
// // };

// // export default Header;

// // src/components/Header.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./styles/header.css";
// import { FaSearch, FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";  // Import React Icons

// const Header = () => {
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [showProfileModal, setShowProfileModal] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         const checkLoginStatus = () => {
//             const token = localStorage.getItem("token");
//             setIsLoggedIn(!!token); // Check if token exists
//         };

//         window.addEventListener("resize", handleResize);
//         checkLoginStatus(); // Initial check

//         window.addEventListener('storage', checkLoginStatus); //Listen for storage changes

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             window.removeEventListener('storage', checkLoginStatus); //Clean up
//         };
//     }, []);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("token"); // Remove token
//         setIsLoggedIn(false);
//         navigate('/'); // Redirect to home
//     };

//     const toggleProfileModal = () => {
//         setShowProfileModal(!showProfileModal);
//     };

//     return (
//         <header>
//             <div className="header-container">
//                 {/* Logo */}
//                 <div className="header-logo">
//                     <Link to="/">Fastemergency</Link>
//                 </div>

//                 {/* Search Bar (Desktop) */}
//                 {!isMobile && (
//                     <div className="header-search-bar">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                         <button><FaSearch /></button>
//                     </div>
//                 )}

//                 {/* Navigation & Features */}
//                 {isMobile ? (
//                     <>
//                         <button className="hamburger-button" onClick={toggleSidebar}>
//                             <FaBars />
//                         </button>
//                         <Sidebar
//                             isOpen={isSidebarOpen}
//                             onClose={toggleSidebar}
//                             isLoggedIn={isLoggedIn}
//                             handleLogout={handleLogout}
//                             toggleProfileModal={toggleProfileModal}
//                         />
//                     </>
//                 ) : (
//                     <nav className="header-nav">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/blogs">Blog</Link></li>
//                             <li><Link to="/emergency">Emergency</Link></li>
//                             <li><Link to="/shop">Shop</Link></li>
//                             {!isLoggedIn ? (
//                                 <>
//                                     <li><Link to="/login">Login</Link></li>
//                                     <li><Link to="/signup">Signup</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li>
//                                         <button className="profile-button" onClick={toggleProfileModal}>
//                                             <FaUser /> Profile
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="logout-button" onClick={handleLogout}>
//                                             <FaSignOutAlt /> Sign Out
//                                         </button>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     </nav>
//                 )}
//             </div>

//             {/* Profile Modal */}
//             {showProfileModal && (
//                 <div className="profile-modal">
//                     <div className="profile-modal-content">
//                         <span className="profile-close-button" onClick={toggleProfileModal}>
//                             ×
//                         </span>
//                         <h2>Profile Information</h2>
//                         {/* Display user data here (fetch from backend if available) */}
//                         <p>Username: (Retrieve from backend or local storage)</p>
//                         <p>Email: (Retrieve from backend or local storage)</p>
//                         {/* Add more profile information as needed */}
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// const Sidebar = ({ isOpen, onClose, isLoggedIn, handleLogout, toggleProfileModal }) => {
//     return (
//         <div className={`sidebar ${isOpen ? "open" : ""}`}>
//             <button className="sidebar-close-button" onClick={onClose}><FaTimes /></button>

//             {/* Search Bar (Mobile) */}
//             <div className="sidebar-search-bar">
//                 <input type="text" placeholder="Search..." />
//                 <button><FaSearch /></button>
//             </div>

//             <ul>
//                 <li><Link to="/" onClick={onClose}>Home</Link></li>
//                 <li><Link to="/blogs" onClick={onClose}>Blog</Link></li>
//                 <li><Link to="/emergency" onClick={onClose}>Emergency</Link></li>
//                 <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
//                 {!isLoggedIn ? (
//                     <>
//                         <li><Link to="/login" onClick={onClose}>Login</Link></li>
//                         <li><Link to="/signup" onClick={onClose}>Signup</Link></li>
//                     </>
//                 ) : (
//                     <>
//                         <li>
//                             <button className="profile-button" onClick={() => { toggleProfileModal(); onClose(); }}>
//                                 <FaUser /> Profile
//                             </button>
//                         </li>
//                         <li>
//                             <button className="logout-button" onClick={() => { handleLogout(); onClose(); }}>
//                                 <FaSignOutAlt /> Sign Out
//                             </button>
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default Header;

// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/header.css";
import { FaSearch, FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";  // Import React Icons
import { getMe } from '../utils/api'; // Import API function

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [searchQuery, setSearchQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [profileData, setProfileData] = useState(null); // New state for profile data
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const checkLoginStatus = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token); // Check if token exists

            if (token) {
                // Fetch profile data if logged in
                fetchProfileData();
            } else {
                setProfileData(null); // Clear profile data if logged out
            }
        };

        const fetchProfileData = async () => {
            try {
                const data = await getMe();
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                // Handle error appropriately (e.g., display a message)
                setProfileData(null); // Ensure profileData is null in case of error
            }
        };

        window.addEventListener("resize", handleResize);
        checkLoginStatus(); // Initial check
        window.addEventListener('storage', checkLoginStatus); //Listen for storage changes


        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('storage', checkLoginStatus); //Clean up
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        setIsLoggedIn(false);
        setProfileData(null);  //Clear profile data
        navigate('/'); // Redirect to home
    };

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    };

    return (
        <header>
            <div className="header-container">
                {/* Logo */}
                <div className="header-logo">
                    <Link to="/">Fastemergency</Link>
                </div>

                {/* Search Bar (Desktop) */}
                {/* {!isMobile && (
                    <div className="header-search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button><FaSearch /></button>
                    </div>
                )} */}

                {/* Navigation & Features */}
                {isMobile ? (
                    <>
                        <button className="hamburger-button" onClick={toggleSidebar}>
                            <FaBars />
                        </button>
                        <Sidebar
                            isOpen={isSidebarOpen}
                            onClose={toggleSidebar}
                            isLoggedIn={isLoggedIn}
                            handleLogout={handleLogout}
                            toggleProfileModal={toggleProfileModal}
                        />
                    </>
                ) : (
                    <nav className="header-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blog</Link></li>
                            <li><Link to="/emergency">Emergency</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            {!isLoggedIn ? (
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Signup</Link></li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <button className="profile-button" onClick={toggleProfileModal}>
                                            <FaUser /> Profile
                                        </button>
                                    </li>
                                    <li>
                                        <button className="logout-button" onClick={handleLogout}>
                                            <FaSignOutAlt /> Sign Out
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                )}
            </div>

            {/* Profile Modal */}
            {showProfileModal && (
                <div className="profile-modal">
                    <div className="profile-modal-content">
                        <span className="profile-close-button" onClick={toggleProfileModal}>
                            ×
                        </span>
                        <h2>Profile Information</h2>
                        {/* Display user data here (fetch from backend if available) */}
                        {profileData ? (
                            <>
                                <p>Username: {profileData.Username}</p>
                                <p>Email: {profileData.Email}</p>
                                <p>Role: {profileData.Role}</p>
                                {/* Add more profile information as needed */}
                            </>
                        ) : (
                            <p>Loading profile data...</p>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

const Sidebar = ({ isOpen, onClose, isLoggedIn, handleLogout, toggleProfileModal }) => {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <button className="sidebar-close-button" onClick={onClose}><FaTimes /></button>

            {/* Search Bar (Mobile) */}
            {/* <div className="sidebar-search-bar">
                <input type="text" placeholder="Search..." />
                <button><FaSearch /></button>
            </div> */}

            <ul className="mobile-links">
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><Link to="/blogs" onClick={onClose}>Blog</Link></li>
                <li><Link to="/emergency" onClick={onClose}>Emergency</Link></li>
                <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
                {!isLoggedIn ? (
                    <>
                        <li><Link to="/login" onClick={onClose}>Login</Link></li>
                        <li><Link to="/signup" onClick={onClose}>Signup</Link></li>
                    </>
                ) : (
                    <>
                        <li>
                            <button className="profile-button" onClick={() => { toggleProfileModal(); onClose(); }}>
                                <FaUser /> Profile
                            </button>
                        </li>
                        <li>
                            <button className="logout-button" onClick={() => { handleLogout(); onClose(); }}>
                                <FaSignOutAlt /> Sign Out
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Header;