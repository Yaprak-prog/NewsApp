import React from "react";

function Navbar({ setCategory }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{
              textDecoration: "underline",
              fontWeight: "700",
              color: "white",
            }}
          >
            NEWS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div
                style={{ color: "white", cursor: "pointer" }}
                className="nav-link"
                onClick={() => {
                  setCategory("technology");
                }}
              >
                Technology
              </div>

              <div
                style={{ color: "white", cursor: "pointer" }}
                className="nav-link"
                onClick={() => {
                  setCategory("business");
                }}
              >
                Business
              </div>

              <div
                style={{ color: "white", cursor: "pointer" }}
                className="nav-link"
                onClick={() => {
                  setCategory("health");
                }}
              >
                Health
              </div>

              <div
                style={{ color: "white", cursor: "pointer" }}
                className="nav-link"
                onClick={() => {
                  setCategory("sports");
                }}
              >
                Sports
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
