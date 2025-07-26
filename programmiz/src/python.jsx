import React from 'react';
import './python.css';

function Python() {
    return (
        <div className="python-simple">
            <h1>Python Tutorial</h1>
            <div className="python-content">
                <p>Python is a powerful, easy-to-learn programming language.</p>
                
                <div className="python-example">
                    <h3>Try this example:</h3>
                    <pre>
                        <code>print("Hello, World!")</code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default Python;
