import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers ,faBuilding, faCity , faGlobe,faCommentDots} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css"

function Sidebar({isOpen}) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? "d-flex" : "d-none"} `}>
      <ul className="list-unstyled">
        <div className={`${styles.header} text-center my-3`}>
          <h3>Dashboards</h3>
        </div>
        <div className="d-flex m-2 py-2  align-items-center cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="me-3 fs-4"/>
          <h3 className="m-0 fs-4">User Management</h3>
        </div>
        <div className="d-flex m-2 py-2  align-items-center cursor-pointer">
          <FontAwesomeIcon icon={faBuilding} className="me-3 fs-4"/>
          <h3 className="m-0 fs-4">Projects Management</h3>
        </div>
        <div className="d-flex m-2 py-2  align-items-center cursor-pointer">
          <FontAwesomeIcon icon={faCity} className="me-3 fs-4"/>
          <h3 className="m-0 fs-4">Developers Management</h3>
        </div>
        <div className="d-flex m-2 py-2  align-items-center cursor-pointer">
          <FontAwesomeIcon icon={faGlobe} className="me-3 fs-4"/>
          <h3 className="m-0 fs-4">Website CMS</h3>
        </div>
        <div className="d-flex m-2 py-2  align-items-center cursor-pointer">
          <FontAwesomeIcon icon={faCommentDots} className="me-3 fs-4"/>
          <h3 className="m-0 fs-4">Live Chat</h3>
        </div>
      </ul>
    </aside>
  )
}

export default Sidebar;