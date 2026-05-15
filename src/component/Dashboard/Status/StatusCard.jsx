import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./StatusCard.module.css";

function StatusCard({ icon, counter, title }) {
  return (
    <div
      className={`col-6 col-md-3 col-sm-4 d-flex align-items-center justify-content-between ${styles.card}`}
    >
      <div className="m-3 p-3 d-flex align-items-center justify-content-between w-100">
        <div>
          <FontAwesomeIcon icon={icon} className={`me-3 fs-1 `} />
        </div>
        <div>
          <h3 className={styles.counter}>{counter}</h3>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
