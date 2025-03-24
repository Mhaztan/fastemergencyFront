// src/pages/FirstAidGuides.jsx
import React from 'react';
import './styles/firstAidGuides.css';

function FirstAidGuides() {
    return (
        <div className="firstAidGuidesPage">
            <nav className="firstAidGuidesHeader">
                <h1>First Aid Guides</h1>
                <p>Learn essential first aid techniques to help in emergencies.</p>
            </nav>
            <main className="firstAidGuidesContent">
                <section className="firstAidGuide">
                    <h2>CPR (Cardiopulmonary Resuscitation)</h2>
                    <p>
                        CPR is a life-saving technique used when someone's breathing or heartbeat has stopped.
                    </p>
                    <ul>
                        <li>
                            <strong>Check for responsiveness:</strong> Tap the person and shout, "Are you OK?"
                        </li>
                        <li>
                            <strong>Call for help:</strong> If there's no response, call emergency services immediately.
                        </li>
                        <li>
                            <strong>Chest compressions:</strong> Push hard and fast in the center of the chest at a rate of 100-120 compressions per minute.
                        </li>
                        <li>
                            <strong>Rescue breaths:</strong> If trained, give two rescue breaths after every 30 compressions.
                        </li>
                    </ul>
                    <p><em>Disclaimer: This guide is for informational purposes only and does not substitute professional medical training.</em></p>
                </section>

                <section className="firstAidGuide">
                    <h2>Choking</h2>
                    <p>
                        Choking occurs when an object blocks the airway.
                    </p>
                    <ul>
                        <li>
                            <strong>Ask if they can speak or cough:</strong> If they can, encourage them to cough forcefully.
                        </li>
                        <li>
                            <strong>Perform the Heimlich maneuver:</strong> If they can't speak or cough, stand behind them, wrap your arms around their waist, make a fist, and thrust inward and upward above their navel.
                        </li>
                    </ul>
                    <p><em>Disclaimer: This guide is for informational purposes only and does not substitute professional medical training.</em></p>
                </section>

                <section className="firstAidGuide">
                    <h2>Burns</h2>
                    <p>
                        Burns can be caused by heat, chemicals, or electricity.
                    </p>
                    <ul>
                        <li>
                            <strong>Cool the burn:</strong> Immediately cool the burn with cool (not cold) running water for 10-20 minutes.
                        </li>
                        <li>
                            <strong>Cover the burn:</strong> Cover the burn with a sterile, non-adhesive bandage or clean cloth.
                        </li>
                        <li>
                            <strong>Seek medical attention:</strong> For severe burns, seek immediate medical attention.
                        </li>
                    </ul>
                    <p><em>Disclaimer: This guide is for informational purposes only and does not substitute professional medical training.</em></p>
                </section>

                {/* Add more first aid guides here */}
            </main>
        </div>
    );
}

export default FirstAidGuides;