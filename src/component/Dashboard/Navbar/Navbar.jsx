import logo from "@assets/59d5178ad546f4ca3aa995c36fb10fe1ffbe2f43.png";
import styles from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSortDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav
      className={`d-flex justify-content-between align-items-center  shadow-sm p-3 ${styles.nav} `}
    >
      <div className="d-flex">
        <button
          className="navbar-toggler mx-3 me-4 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faX : faBars} className="fs-3" />
        </button>
        <div>
          <img src={logo} className={`img-fluid  ${styles.image}`} />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="me-4 position-relative ">
          <div
            className={`d-flex justify-content-center align-items-center ${styles.notification}`}
          >
            <p className="m-0 text-white">4</p>
          </div>
          <FontAwesomeIcon icon={faBell} className="fs-4" />
        </div>
        <div className="d-flex pointer position-relative" role="button">
          <p className="m-0">Super Admin</p>
          <FontAwesomeIcon
            icon={faSortDown}
            className={`fs-5 position-relative ${styles.pos}`}
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
