

import React from "react";
import "./styles/emergencyServices.css";
import { FaPhone, FaFireExtinguisher, FaAmbulance, FaCar, FaCross, FaRoad } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";

const EmergencyServices = () => {
    const services = [
        { name: "Police", phone: "112", reactIcon: <FaPersonMilitaryRifle /> },
        { name: "Fire", phone: "119", reactIcon: <FaFireExtinguisher /> },
        { name: "Ambulance", phone: "112", reactIcon: <FaAmbulance /> },
        { name: "Roadside Assistance", phone: "112", reactIcon: <FaCar /> },
        { name: "National Direct Emergency Line", phone: "+2348032003557", reactIcon: <FaCross />},
        { name: "FRSC", phone: "122", reactIcon: <FaRoad />}
    ];

    return (
        <section className="emergency-services">
            <div className="container-emergency">
                <h2>🚨 Emergency Services</h2>
                <p className="emergency-description">
                    In case of an emergency, quickly contact the relevant services below.
                </p>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.name} className="service-card">
                            <div className="icon-wrapper">{service.reactIcon}</div>
                            <h3>{service.name}</h3>
                            <a href={`tel:${service.phone}`} className="call-button">
                                <FaPhone /> Call {service.phone}
                            </a>
                        </div>
                    ))}
                </div>
                <p className="disclaimer">
                    ⚠️ These are emergency contact details. Only use them in real emergencies.
                </p>
            </div>
        </section>
    );
};

export default EmergencyServices;
