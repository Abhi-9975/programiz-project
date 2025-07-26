import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPython, FaJava } from 'react-icons/fa';
import { DiJavascript1, DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import './home.css';

function Home() {
  const navigate = useNavigate();

  // Language data with colors and icons
  const languages = [
    { name: "Python", icon: <FaPython />, color: "#3776AB", route: "/python" },
    { name: "JavaScript", icon: <DiJavascript1 />, color: "#F7DF1E", textColor: "#323330", route: "/js" },
    { name: "Java", icon: <FaJava />, color: "#007396", route: "/java" },
    { name: "HTML", icon: <AiFillHtml5 />, color: "#E34F26", route: "/html" },
    { name: "CSS", icon: <DiCss3 />, color: "#2965F1", route: "/css" }
  ];

  return (
    <div className="page-container">
      <div className="home-content">
        <h1>Select the language you want to learn</h1>
        <div className="language-grid">
          {languages.map((lang, index) => (
            <button
              key={index}
              className="language-card"
              onClick={() => navigate(lang.route)}
              style={{
                backgroundColor: lang.color,
                color: lang.textColor || 'white'
              }}
            >
              <span className="language-icon">{lang.icon}</span>
              <span className="language-name">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;