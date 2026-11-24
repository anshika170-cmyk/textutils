
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({
  title = 'Set title here',
  about = 'About',
  mode,
  toggleMode
}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode === 'dark' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'dark' : 'light'}`}>
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          {title}
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {about}
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              onChange={toggleMode}
              checked={mode === 'dark'}
            />

            <label
              className={`form-check-label ${mode === 'dark' ? 'text-light' : 'text-dark'}`}
              htmlFor="darkModeSwitch"
            >
              Enable dark mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func
};

export default Navbar;
