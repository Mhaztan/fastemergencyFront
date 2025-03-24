// src/components/FAQs.jsx
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Icons for expand/collapse
import './styles/faqs.css';

const faqsData = [
    { question: "What is FastEmergency.com.ng?", answer: "FastEmergency.com.ng is an AI-powered platform that helps you quickly find verified emergency contacts in Nigeria, including police, hospitals, fire services, and roadside assistance." },
    { question: "Is FastEmergency.com.ng free to use?", answer: "Yes, FastEmergency.com.ng is completely free to use for everyone." },
    { question: "How do I find emergency contacts near me?", answer: "Simply enable location services, and our AI system will suggest the nearest verified emergency contacts. You can also search by city or category." },
    { question: "How accurate is the emergency contact information?", answer: "We verify contacts regularly, but details may change. Always confirm with the service provider if possible." },
    { question: "Can I submit an emergency contact?", answer: "Yes! You can submit emergency contacts through the 'Submit Contact' form on our website. We will review and verify before adding them." },
    { question: "Does FastEmergency.com.ng work outside Nigeria?", answer: "Currently, we only provide emergency contacts for Nigeria." },
    { question: "How does the AI-powered contact suggestion work?", answer: "Our AI considers your location, emergency type, and verification status to provide the best emergency contact recommendations." },
    { question: "How do I enable location services on my device?", answer: "Go to your device/browser settings and enable location access for FastEmergency.com.ng." },
    { question: "Is my data secure?", answer: "Yes, we do not store your location or personal data. Your privacy and security are our priorities." },
    { question: "How can I contact FastEmergency.com.ng for support?", answer: "You can reach us through the 'Contact Us' page on our website." }
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faqsContainer">
            {faqsData.map((faq, index) => (
                <div key={index} className="faqItem">
                    <button className="faqQuestion" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                        {openIndex === index ? <FiMinus className="icon" /> : <FiPlus className="icon" />}
                    </button>
                    {openIndex === index && <p className="faqAnswer">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
}

export default FAQs;
