import React from "react";
import "../CSS/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">
                &copy; 2024 Usaid Ali. All Rights Reserved.
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/usaid-ali-4a281028b/">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/UsaidAl">
                    <i className="fab fa-github"></i> GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;