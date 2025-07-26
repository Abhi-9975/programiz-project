import React from 'react';
import './html.css';

function Html() {
  const features = [
    "Defines the structure of web content",
    "Uses a system of tags and attributes", 
    "Works with CSS and JavaScript",
    "Platform-independent",
    "Semantic elements improve accessibility"
  ];

  const commonTags = [
    { name: "div", desc: "Content division" },
    { name: "p", desc: "Paragraph" },
    { name: "a", desc: "Hyperlink" },
    { name: "img", desc: "Image" }
  ];

  return (
    <div className="html-container">
      <h1 className="html-title">Hello, this is HTML</h1>
      <p className="html-description">
        HTML (HyperText Markup Language) is the standard markup language for creating web pages.
      </p>

      <div className="html-features">
        <h2>Key Features:</h2>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="html-example">
        <h3>Basic HTML Document:</h3>
        <pre>
          <code>
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}
          </code>
        </pre>
      </div>

      <div className="html-tags">
        <h3>Common HTML Tags:</h3>
        <div className="tags-grid">
          {commonTags.map((tag, index) => (
            <div className="tag-card" key={index}>
              <span className="tag-name">&lt;{tag.name}&gt;</span>
              <span>{tag.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Html;