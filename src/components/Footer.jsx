import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h3>
        Made with <span style={{ color: "red" }}>❤</span> by Shaheer
      </h3>
      <div className="links">
        <a href="https://github.com/shaheersystems">
          <span className="fa fa-github-square"></span>
        </a>
        <a href="https://twitter.com/shaheerdevr">
          <span className="fa fa-twitter-square"></span>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-shaheer-a28994242/">
          <span className="fa fa-linkedin-square"></span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
