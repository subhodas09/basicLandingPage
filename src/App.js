import React from "react";
import logo from "./logo.png";
import "./LandingPage.css";

const links = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Instagram", url: "https://www.instagram.com" }
];

const LandingPage = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Sample Links</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="header-cell">Name</th>
            <th className="header-cell">URL</th>
          </tr>
        </thead>
        <tbody>
          {links.map(link => (
            <tr key={link.name} className="row">
              <td className="cell">{link.name}</td>
              <td className="cell">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;
