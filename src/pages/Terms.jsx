import React from "react";
import "./styles/terms.css";

const Terms = () => {
    return (
        <div className="terms">
            <nav className="terms-header">
                <h1 className="terms-title">Terms of Service</h1>
                <p className="terms-updated">Last Updated: March 19, 2025</p>
            </nav>

            <section className="terms-section">
                <h2 className="terms-heading">Acceptance of Terms</h2>
                <p className="terms-text">
                    By accessing and using FastEmergency.com.ng ("the Website"), you ("the User") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you are prohibited from using or accessing this Website.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Description of Service</h2>
                <p className="terms-text">
                    FastEmergency.com.ng is an AI-powered platform that provides Users with access to verified emergency contact information in Nigeria. This includes local emergency services such as police, hospitals, fire departments, and roadside assistance.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Disclaimer of Warranty</h2>
                <p className="terms-text">
                    The Website and its content are provided "as is" without warranty of any kind, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Limitation of Liability</h2>
                <p className="terms-text">
                    FastEmergency.com.ng, its affiliates, officers, and employees are not responsible for any damages arising from the use or inability to use this Website.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Use of Information</h2>
                <ul className="terms-list">
                    <li className="terms-item"><strong>Accuracy:</strong> We strive to provide up-to-date information but do not guarantee its accuracy.</li>
                    <li className="terms-item"><strong>Verification:</strong> Users should independently verify emergency contacts before relying on them.</li>
                    <li className="terms-item"><strong>Emergency Situations:</strong> This Website is not a substitute for directly contacting emergency services.</li>
                </ul>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">User Submissions</h2>
                <p className="terms-text">Users submitting emergency contact details are responsible for their accuracy and legality.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">AI-Generated Content</h2>
                <p className="terms-text">The Website contains AI-generated blog content, which is provided for informational purposes only.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Affiliate Links</h2>
                <p className="terms-text">FastEmergency.com.ng may earn a commission through affiliate links but does not endorse third-party products or services.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Intellectual Property</h2>
                <p className="terms-text">The content of this Website is protected by copyright and other intellectual property laws.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Governing Law</h2>
                <p className="terms-text">These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Dispute Resolution</h2>
                <p className="terms-text">Any disputes will be resolved through arbitration in Lagos, Nigeria.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Modifications to Terms</h2>
                <p className="terms-text">FastEmergency.com.ng reserves the right to modify these Terms at any time.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Termination</h2>
                <p className="terms-text">We may terminate your access to the Website at any time without notice.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Severability</h2>
                <p className="terms-text">If any part of these Terms is found invalid, the rest shall remain in effect.</p>
            </section>

            <section className="terms-section">
                <h2 className="terms-heading">Contact Information</h2>
                <p className="terms-text">
                    If you have any questions about these Terms, please contact us at:<br />
                    <strong>Email:</strong> support@fastemergency.com.ng
                </p>
            </section>
        </div>
    );
};

export default Terms;
