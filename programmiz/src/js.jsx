import React from 'react';
import './js.css';

function JavaScript() {
    return (
        <div className="js-container">
            <h1 className="js-title">Hello, this is JavaScript</h1>
            <p className="js-description">
                JavaScript is a versatile programming language used for web development, 
                both on the client and server side.
            </p>
            
            <div className="js-features">
                <h2>Key Features:</h2>
                <ul className="features-list">
                    <li>Dynamic and interpreted</li>
                    <li>Event-driven programming</li>
                    <li>Supports asynchronous operations (Promises, async/await)</li>
                    <li>Works with APIs and JSON</li>
                    <li>Runs in browsers and on servers (Node.js)</li>
                </ul>
            </div>

            <div className="js-example">
                <h3>Quick Example:</h3>
                <pre>
                    <code>
{`// Simple function in JavaScript
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet("World"));`}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default JavaScript;