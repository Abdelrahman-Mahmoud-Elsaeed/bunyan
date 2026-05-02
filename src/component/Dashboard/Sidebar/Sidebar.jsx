import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBuilding,
  faCity,
  faGlobe,
  faCommentDots,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css";

function Sidebar({ isOpen }) {
  const Links = [
    { title: "Status", icon: faChartLine , active:true},
    { title: "User Management", icon: faUsers , active:false },
    { title: "Projects Management", icon: faBuilding  , active:false},
    { title: "Developers Management", icon: faCity , active:false},
    { title: "Website CMS", icon: faGlobe , active:false},
    { title: "Live Chat", icon: faCommentDots , active:false},
  ];
  return (
    <aside className={`${styles.sidebar} ${isOpen ? "d-flex" : "d-none"}`}>
      <ul className="list-unstyled w-100">
        <div className={`${styles.header} px-3 my-3`}>
          <h3>Dashboards</h3>
        </div>
        {Links.map((link,index) => 
          (
            <div className={`d-flex p-3  align-items-center cursor-pointer ${styles.navItem} ${link.active ? styles.active: "" }`} key={index}>
              <FontAwesomeIcon icon={link.icon} className={`me-3 fs-4 ${styles.icon}`} />
              <h3 className={`m-0   ${styles.navTitle}`}>{link.title}</h3>
            </div>
          )
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
