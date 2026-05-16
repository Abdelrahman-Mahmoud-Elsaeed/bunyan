import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBuilding,
  faCity,
  faGlobe,
  faCommentDots,
  faChartLine,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useDraft } from "../../../context/DraftContext";

function Sidebar({ isOpen }) {
  const Links = [
    { title: "Status", icon: faChartLine, path: "/" },
    { title: "User Management", icon: faUsers, path: "/user" },
    { title: "Projects Management", icon: faBuilding, path: "/projects" },
    { title: "Developers Management", icon: faCity, path: "/developers" },
    { title: "Website CMS", icon: faGlobe, path: "/website-cms" },
    { title: "Live Chat", icon: faCommentDots, path: "/live-chat" },
  ];
  const { drafts, hasDraftData } = useDraft();
  return (
    <aside className={`${styles.sidebar} ${isOpen ? "d-flex" : "d-none"}`}>
      <ul className={`list-unstyled w-100 ${styles.sidebarList}`}>
        {" "}
        <div className={`${styles.header} p-3`}>
          <h3>Dashboards</h3>
        </div>
        {Links.map((link, index) => (
          <NavLink className="text-decoration-none" key={index} to={link.path}>
            {({ isActive }) => (
              <div
                className={`d-flex p-3  align-items-center cursor-pointer ${styles.navItem} ${isActive ? styles.active : ""}`}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className={`me-3 fs-4 ${styles.icon}`}
                />
                <h3 className={`m-0   ${styles.navTitle}`}>{link.title}</h3>
              </div>
            )}
          </NavLink>
        ))}
        {hasDraftData && (
          <div className="p-3">
            <div className="card bg-dark border-secondary text-white shadow-sm">
              <div className="card-body p-3">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon
                    icon={faUserEdit}
                    className="me-2 text-warning"
                  />
                  <h6 className="card-title mb-0 small uppercase text-warning">
                    Draft in Progress
                  </h6>
                </div>
                <div className="small opacity-75">
                  <div className="small opacity-75">
                    {Object.entries(drafts || {}).map(([moduleKey, data]) => (
                      <div key={moduleKey} className="mb-2">
                        <strong className="text-warning text-capitalize">
                          {moduleKey}
                        </strong>

                        <div className="small opacity-75">
                          {Object.entries(data || {}).map(([key, value]) =>
                            value ? (
                              <div className="text-truncate" key={key}>
                                <strong className="text-capitalize">
                                  {key}:
                                </strong>{" "}
                                {value}
                              </div>
                            ) : null,
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-2 pt-2 border-top border-secondary">
                  <small className="text-muted italic">
                    Form is partially filled...
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
