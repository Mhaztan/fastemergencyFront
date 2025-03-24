// import React from 'react';
// import './styles/featuresBenefits.css';

// const FeaturesBenefits = () => {
//     const features = [
//         {
//             title: 'Instant Access to Help',
//             description: 'Quickly find emergency contacts and services in your area.',
//             icon: 'access.png',
//         },
//         {
//             title: 'AI-Powered Recommendations',
//             description: 'Get personalized advice and guidance during critical situations.',
//             icon: 'ai.png',
//         },
//         {
//             title: 'Community Support',
//             description: 'Connect with others and share your experiences.',
//             icon: 'community.png',
//         },
//     ];

//     return (
//         <section className="features-benefits">
//             <div className="container-features-benefits">
//                 <h2>Features & Benefits</h2>
//                 <div className="features-grid">
//                     {features.map((feature) => (
//                         <div key={feature.title} className="feature-card">
//                             <img src={feature.icon} alt={feature.title} />
//                             <h3>{feature.title}</h3>
//                             <p>{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturesBenefits;


import React from "react";
import "./styles/featuresBenefits.css";
import { FaBolt, FaBrain, FaUsers } from "react-icons/fa"; // Importing icons

const FeaturesBenefits = () => {
    const features = [
        {
            title: "Instant Access to Help",
            description: "Quickly find emergency contacts and services in your area.",
            icon: <FaBolt />,
        },
        {
            title: "AI-Powered Recommendations",
            description: "Get personalized advice and guidance during critical situations.",
            icon: <FaBrain />,
        },
        {
            title: "Community Support",
            description: "Connect with others and share your experiences.",
            icon: <FaUsers />,
        },
    ];

    return (
        <section className="features-benefits">
            <div className="container-features-benefits">
                <h2>Features & Benefits</h2>
                <p className="subtitle">Powerful tools to keep you safe and informed.</p>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.title} className="feature-card">
                            <div className="icon-circle">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesBenefits;
