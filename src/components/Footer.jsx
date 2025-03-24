import React from "react";
import { Link } from "react-router-dom";
import './styles/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="footer-sections">
                    {/* LEGALS SECTION */}
                    <div className="footer-column">
                        <h3>Legals</h3>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* EDUCATIONAL SECTION */}
                    <div className="footer-column">
                        <h3>Educational</h3>
                        <ul>
                            <li><Link to="/emergency-preparedness">Emergency Preparedness</Link></li>
                            <li><Link to="/first-aid-guides">First Aid Guides</Link></li>
                            <li><Link to="/fire-safety">Fire Safety Tips</Link></li>
                        </ul>
                    </div>

                    {/* REPORTS SECTION */}
                    <div className="footer-column">
                        <h3>Reports</h3>
                        <ul>
                            <li><Link to="/#">Report Missing Person</Link></li>
                            <li><Link to="/#">Disaster Reports</Link></li>
                            <li><Link to="/#">Emergency Hotlines</Link></li>
                            <li><Link to="/#">Report Fraud/Scam</Link></li>
                        </ul>
                    </div>

                    {/* SOCIALS SECTION */}
                    <div className="footer-column">
                        <h3>Socials</h3>
                        <ul className="social-links">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT SECTION */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Fastemergency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
