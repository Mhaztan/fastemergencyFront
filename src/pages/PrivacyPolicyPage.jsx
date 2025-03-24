// src/pages/PrivacyPolicyPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles/privacy.css"; // Import styling

function PrivacyPolicyPage() {
    return (
        <div className="privacyContainer">
            <nav className="privacyHeader">
                <h1>Privacy Policy</h1>
                <p>Effective Date: 19/03/2025</p>
            </nav>

            <main className="privacyContent">
                <section>
                    <h2>1. Information We Collect</h2>
                    <p><strong>Location Data:</strong> With your consent, we collect your device's location to provide emergency contacts. We do not store this data after your session.</p>
                    <p><strong>Submitted Contact Information:</strong> Emergency contacts you submit (e.g., name, phone number, address) are collected for verification and potential database inclusion.</p>
                    <p><strong>Log Data:</strong> We collect log data, including IP address, browser type, referring pages, and timestamps.</p>
                    <p><strong>Cookies & Similar Technologies:</strong> We use cookies for analytics, personalization, and ads.</p>
                    <p><strong>Affiliate Links:</strong> We use affiliate links (e.g., AliExpress) but do not store payment details.</p>
                </section>

                <section>
                    <h2>2. How We Use Information</h2>
                    <ul>
                        <li>To provide and improve our site.</li>
                        <li>To verify submitted emergency contact information.</li>
                        <li>To analyze site usage and improve content.</li>
                        <li>To communicate updates and promotions (opt-out available).</li>
                        <li>To comply with legal requirements.</li>
                        <li>To display relevant ads through Google AdSense.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. How We Share Information</h2>
                    <p>We may share information with:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> Hosting, analytics, and support services.</li>
                        <li><strong>Legal Requests:</strong> Compliance with legal obligations.</li>
                        <li><strong>Protection of Rights:</strong> To protect our users and platform.</li>
                        <li><strong>Business Transfers:</strong> If the company is acquired or merged.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data Retention</h2>
                    <p>We retain your data only as long as necessary. Rejected submissions are not stored.</p>
                </section>

                <section>
                    <h2>5. Your Rights</h2>
                    <p>You may request to access, correct, delete, or object to processing your data. Contact us via our <Link to="/contact">Contact Us</Link> page.</p>
                </section>

                <section>
                    <h2>6. Children's Privacy</h2>
                    <p>We do not collect data from children under 13. Parents may request deletion of such data.</p>
                </section>

                <section>
                    <h2>7. Security</h2>
                    <p>We implement security measures to protect your information, but no system is 100% secure.</p>
                </section>

                <section>
                    <h2>8. Links to Third-Party Websites</h2>
                    <p>We are not responsible for third-party sites (e.g., AliExpress). Review their privacy policies separately.</p>
                </section>

                <section>
                    <h2>9. Changes to This Policy</h2>
                    <p>We may update this policy. Continued use of the site implies acceptance of changes.</p>
                </section>

                <section>
                    <h2>10. Contact Us</h2>
                    <p>For questions, contact us via our <Link to="/contact">Contact Us</Link> page.</p>
                </section>
            </main>
        </div>
    );
}

export default PrivacyPolicyPage;
