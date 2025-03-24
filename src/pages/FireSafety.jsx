// src/pages/FireSafety.jsx
import React from 'react';
import './styles/fireSafety.css';

function FireSafety() {
    return (
        <div className="fireSafetyPage">
            <nav className="fireSafetyHeader">
                <h1>Fire Safety</h1>
                <p>Learn essential fire safety tips to protect yourself and your loved ones.</p>
            </nav>
            <main className="fireSafetyContent">
                <section className="fireSafetyTips">
                    <h2>Fire Safety Tips</h2>
                    <ul>
                        <li>
                            <strong>Install Smoke Alarms:</strong> Install smoke alarms on every level of your home and test them monthly.
                        </li>
                        <li>
                            <strong>Have a Fire Escape Plan:</strong> Create and practice a fire escape plan with your family. Know two ways out of every room.
                        </li>
                        <li>
                            <strong>Keep Fire Extinguishers Handy:</strong> Have fire extinguishers in your home and know how to use them.
                        </li>
                        <li>
                            <strong>Never Leave Cooking Unattended:</strong> Stay in the kitchen when you are frying, grilling, or broiling food.
                        </li>
                        <li>
                            <strong>Be Careful with Candles:</strong> Keep candles away from flammable materials and never leave them unattended.
                        </li>
                        <li>
                            <strong>Maintain Heating Equipment:</strong> Have your heating equipment (furnace, fireplace, wood stove) inspected and cleaned annually.
                        </li>
                    </ul>
                </section>

                <section className="firePreventionChecklist">
                    <h2>Fire Prevention Checklist</h2>
                    <ul>
                        <li>
                            <input type="checkbox" id="smokeAlarms" />
                            <label htmlFor="smokeAlarms">Smoke alarms installed and tested monthly</label>
                        </li>
                        <li>
                            <input type="checkbox" id="fireEscapePlan" />
                            <label htmlFor="fireEscapePlan">Fire escape plan created and practiced</label>
                        </li>
                        <li>
                            <input type="checkbox" id="fireExtinguishers" />
                            <label htmlFor="fireExtinguishers">Fire extinguishers available and in working order</label>
                        </li>
                        <li>
                            <input type="checkbox" id="electricalSafety" />
                            <label htmlFor="electricalSafety">Electrical wiring inspected and in good condition</label>
                        </li>
                        <li>
                            <input type="checkbox" id="flammableMaterials" />
                            <label htmlFor="flammableMaterials">Flammable materials stored safely</label>
                        </li>
                        <li>
                            <input type="checkbox" id="heatingEquipment" />
                            <label htmlFor="heatingEquipment">Heating equipment inspected and cleaned annually</label>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default FireSafety;