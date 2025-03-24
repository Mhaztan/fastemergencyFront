// import React from 'react';
// import './styles/mobileAppPromo.css';

// const MobileAppPromo = () => {
//     return (
//         <section className="mobile-app-promo">
//             <div className="container-mobile-app-promo">
//                 <h2>Get Our Mobile App (Coming Soon)</h2>
//                 <p>Stay prepared on the go with our mobile app.</p>
//             </div>
//         </section>
//     );
// };

// export default MobileAppPromo;

import React from "react";
import "./styles/mobileAppPromo.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import mobile from '../assets/mobile.jpg';

const MobileAppPromo = () => {
    return (
        <section className="mobile-app-promo">
            <div className="container-mobile-app-promo">
                <div className="text-content">
                    <h2>📱 Get Our Mobile App (Coming Soon)</h2>
                    <p>Stay prepared on the go with real-time emergency assistance.</p>

                    <div className="store-buttons">
                        <button className="app-store">
                            <FaApple /> App Store
                        </button>
                        <button className="google-play">
                            <FaGooglePlay /> Google Play
                        </button>
                    </div>
                </div>

                <div className="mockup">
                    <img src={mobile} alt="Mobile App Mockup" />
                </div>
            </div>
        </section>
    );
};

export default MobileAppPromo;
