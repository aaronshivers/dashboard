import React from 'react'
import {FaBars, FaSearch, FaBell, FaEnvelope, FaUserCircle} from 'react-icons/fa'

const Navigation = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
    <a className="navbar-brand mr-1" href="index.html">
      Start Bootstrap
    </a>
    <button
      className="btn btn-link btn-sm text-white order-1 order-sm-0"
      id="sidebarToggle"
      href="#"
    >
      <FaBars />
    </button>
    {/* Navbar Search */}
    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
    {/* Navbar */}
    <ul className="navbar-nav ml-auto ml-md-0">
      <li className="nav-item dropdown no-arrow mx-1">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FaBell />
          <span className="badge badge-danger">9+</span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="alertsDropdown"
        >
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
      <li className="nav-item dropdown no-arrow mx-1">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FaEnvelope />
          <span className="badge badge-danger">7</span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="messagesDropdown"
        >
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
      <li className="nav-item dropdown no-arrow">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FaUserCircle />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="userDropdown"
        >
          <a className="dropdown-item" href="#">
            Settings
          </a>
          <a className="dropdown-item" href="#">
            Activity Log
          </a>
          <div className="dropdown-divider" />
          <a
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
)

export default Navigation
