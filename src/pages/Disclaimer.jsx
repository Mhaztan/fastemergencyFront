import React from "react";
import "./styles/disclaimer.css";

const Disclaimer = () => {
    return (
        <div className="disclaimer">
            <nav className="disclaimer-header">
                <h1 className="disclaimer-title">Disclaimer</h1>
                <p className="disclaimer-updated">Last Updated: [Date]</p>
            </nav>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">General Information</h2>
                <p className="disclaimer-text">
                    FastEmergency.com.ng provides quick access to emergency contact information in Nigeria. While we strive for accuracy, the following disclaimers apply.
                </p>
            </section>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">Accuracy and Verification of Information</h2>
                <ul className="disclaimer-list">
                    <li className="disclaimer-item"><strong>No Guarantee:</strong> We do not guarantee accuracy, completeness, or timeliness of information.</li>
                    <li className="disclaimer-item"><strong>User Submissions:</strong> Some data is user-submitted and may not be verified.</li>
                    <li className="disclaimer-item"><strong>Reliance at Your Own Risk:</strong> Use information at your discretion.</li>
                    <li className="disclaimer-item"><strong>Confirm Directly:</strong> Always verify emergency details with service providers.</li>
                </ul>
            </section>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">Emergency Services</h2>
                <ul className="disclaimer-list">
                    <li className="disclaimer-item"><strong>Not a Substitute:</strong> FastEmergency.com.ng does not replace direct emergency calls. Always dial 112, 767, or local numbers.</li>
                    <li className="disclaimer-item"><strong>No Responsibility:</strong> We are not responsible for emergency response times or service quality.</li>
                </ul>
            </section>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">Location Data</h2>
                <ul className="disclaimer-list">
                    <li className="disclaimer-item"><strong>Accuracy:</strong> Location services depend on technology and may not be precise.</li>
                    <li className="disclaimer-item"><strong>Consent Required:</strong> Location data is only collected with your explicit permission.</li>
                </ul>
            </section>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">Affiliate Links and Products</h2>
                <ul className="disclaimer-list">
                    <li className="disclaimer-item"><strong>Affiliate Earnings:</strong> We may earn commissions from purchases made through affiliate links.</li>
                    <li className="disclaimer-item"><strong>No Endorsement:</strong> Affiliate links do not imply an endorsement of products/services.</li>
                    <li className="disclaimer-item"><strong>Purchase at Your Own Risk:</strong> Any transactions are between you and the third-party vendor.</li>
                </ul>
            </section>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">Limitation of Liability</h2>
                <p className="disclaimer-text">FastEmergency.com.ng is not liable for any damages arising from the use of this website.</p>
            </section>

            <section className="disclaimer-section">
                <h2 className="disclaimer-heading">Changes to This Disclaimer</h2>
                <p className="disclaimer-text">We may update this Disclaimer periodically. Continued use of the website signifies acceptance of any changes.</p>
            </section>
        </div>
    );
};

export default Disclaimer;
