import React from 'react';
import './java.css';

function Java() {
    return (
        <div className="java-container">
            <h1 className="java-title">Hello, this is Java</h1>
            <p className="java-description">
                Java is a popular programming language and computing platform.
            </p>
            <div className="java-features">
                <p>Key features:</p>
                <ul>
                    <li>Object-oriented</li>
                    <li>Platform independent</li>
                    <li>Secure</li>
                    <li>Multithreaded</li>
                </ul>
            </div>
        </div>
    );
}

export default Java;