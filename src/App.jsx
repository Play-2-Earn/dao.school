import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="title-container">
          <h1 className="domain-glow">DAO.school</h1>
          <p className="subtitle">Decentralized Autonomous Education</p>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-card">
            <h2>Learn Web3 Fundamentals</h2>
            <div className="pill-container">
              <span className="pill">Smart Contracts</span>
              <span className="pill">DAO Governance</span>
              <span className="pill">DeFi Systems</span>
            </div>
          </div>
        </section>

        <section className="curriculum">
          <div className="course-card">
            <div className="icon academy-icon"></div>
            <h3>DAO Architecture 101</h3>
            <p>Design and deploy decentralized organizations</p>
          </div>

          <div className="course-card">
            <div className="icon blockchain-icon"></div>
            <h3>Blockchain Basics</h3>
            <p>Understand distributed ledger technology</p>
          </div>

          <div className="course-card">
            <div className="icon governance-icon"></div>
            <h3>Community Governance</h3>
            <p>Master proposal systems and voting mechanisms</p>
          </div>
        </section>

        <div className="cta-section">
          <a
            href="https://www.b1tcoin.ai/"
            className="enroll-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Bitcoin AI
            <span className="button-arrow">↗</span>
          </a>
        </div>
      </main>

      <footer className="footer">
        <p>Decentralized Learning Platform · Powered by DAO Governance</p>
        <p>dao.school - Educating the Web3 Generation</p>
      </footer>
    </div>
  );
}

export default App;
