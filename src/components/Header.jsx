import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Counter App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/jashezan/Counter-App-Assignment-2"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://github.com/jashezan/Counter-App-Assignment-2"
                target="_blank"
                rel="noreferrer noopener"
                style={{ position: "absolute", right: "10px" }}
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
