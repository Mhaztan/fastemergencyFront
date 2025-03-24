
import React from "react";
import { FaClipboardList, FaRobot, FaPhoneAlt } from "react-icons/fa";
import "./styles/howItWorks.css";

const steps = [
    {
        id: 1,
        icon: <FaClipboardList />,
        title: "Describe Your Emergency",
        description: "Quickly enter details for instant AI analysis.",
    },
    {
        id: 2,
        icon: <FaRobot />,
        title: "Receive AI-Powered Guidance",
        description: "Get intelligent recommendations tailored to your situation.",
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        title: "Connect & Take Action",
        description: "Directly contact the right services or professionals.",
    },
];

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container-how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    {steps.map((step) => (
                        <div key={step.id} className="step">
                            <div className="icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
                <button className="cta-button">Get Started</button>
            </div>
        </section>
    );
};

export default HowItWorks;
