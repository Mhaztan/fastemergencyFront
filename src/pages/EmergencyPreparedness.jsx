// src/pages/EmergencyPreparedness.jsx
import React from 'react';
import './styles/emergencyPreparedness.css';

function EmergencyPreparedness() {
    return (
        <div className="emergencyPreparednessPage">
            <nav className="emergencyPreparednessHeader">
                <h1>Emergency Preparedness</h1>
                <p>Be prepared for any situation. Here are some essential tips.</p>
            </nav>
            <main className="emergencyPreparednessContent">
                <section className="preparednessTips">
                    <h2>Essential Tips</h2>
                    <ul>
                        <li>
                            <strong>Create an Emergency Plan:</strong> Discuss potential emergencies with your family and create a plan for how to respond.
                        </li>
                        <li>
                            <strong>Build an Emergency Kit:</strong> Gather essential supplies like food, water, first-aid supplies, and a flashlight.
                        </li>
                        <li>
                            <strong>Stay Informed:</strong> Monitor weather reports and emergency alerts in your area.
                        </li>
                        <li>
                            <strong>Know Your Evacuation Routes:</strong> Identify safe evacuation routes from your home and workplace.
                        </li>
                    </ul>
                </section>

                <section className="emergencyKitChecklist">
                    <h2>Emergency Kit Checklist</h2>
                    <ul>
                        <li>
                            <input type="checkbox" id="water" />
                            <label htmlFor="water">Water (1 gallon per person per day)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="food" />
                            <label htmlFor="food">Non-perishable food supply (at least 3-day supply)</label>
                        </li>
                        <li>
                            <input type="checkbox" id="firstAid" />
                            <label htmlFor="firstAid">First-aid kit</label>
                        </li>
                        <li>
                            <input type="checkbox" id="flashlight" />
                            <label htmlFor="flashlight">Flashlight</label>
                        </li>
                        <li>
                            <input type="checkbox" id="batteryRadio" />
                            <label htmlFor="batteryRadio">Battery-powered or hand-crank radio</label>
                        </li>
                        <li>
                            <input type="checkbox" id="extraBatteries" />
                            <label htmlFor="extraBatteries">Extra batteries</label>
                        </li>
                        <li>
                            <input type="checkbox" id="whistle" />
                            <label htmlFor="whistle">Whistle to signal for help</label>
                        </li>
                        <li>
                            <input type="checkbox" id="dustMask" />
                            <label htmlFor="dustMask">Dust mask to help filter contaminated air</label>
                        </li>
                        <li>
                            <input type="checkbox" id="plasticSheeting" />
                            <label htmlFor="plasticSheeting">Plastic sheeting and duct tape to shelter in place</label>
                        </li>
                        <li>
                            <input type="checkbox" id="moistTowelettes" />
                            <label htmlFor="moistTowelettes">Moist towelettes, garbage bags and plastic ties for personal sanitation</label>
                        </li>
                        <li>
                            <input type="checkbox" id="wrenchPliers" />
                            <label htmlFor="wrenchPliers">Wrench or pliers to turn off utilities</label>
                        </li>
                        <li>
                            <input type="checkbox" id="canOpener" />
                            <label htmlFor="canOpener">Manual can opener for food</label>
                        </li>
                        <li>
                            <input type="checkbox" id="localMaps" />
                            <label htmlFor="localMaps">Local maps</label>
                        </li>
                        <li>
                            <input type="checkbox" id="cellphoneCharger" />
                            <label htmlFor="cellphoneCharger">Cell phone charger or portable power bank</label>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default EmergencyPreparedness;