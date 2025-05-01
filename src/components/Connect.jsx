import React from "react";
import Spline from "@splinetool/react-spline";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Connect.css";

const Connect = () => {
  return (
    <section className="connect-section" id="connect">
      <h2 className="connect-title">Connect with Me</h2>
      <div className="connect-layout">
        <div className="connect-left">
         
            <a
  href="https://www.linkedin.com/in/akshitavedantam"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    textDecoration: "none",
    border: "2px solid #6C63FF",
    borderRadius: "8px",
    padding: "0.5rem 1.5rem",
    color: "#fff",
    backgroundColor: "#1e1e1e",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px #6C63FF",
    cursor: "pointer",
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#292929"}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1e1e1e"}
>
  Connect on LinkedIn
</a>

            
          
          <p className="connect-info">
            <FaEnvelope className="icon" />
            akshitavedantam001@gmail.com
          </p>
          <p className="connect-info">
            <FaPhoneAlt className="icon" />
            +91 8978165895
          </p>
        </div>

        <div className="connect-right">
          <Spline scene="https://prod.spline.design/hwG5HEqhNNLh4Dvj/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Connect;
