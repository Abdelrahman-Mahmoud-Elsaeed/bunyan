import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import StatusCard from "../../../../component/Dashboard/Status/StatusCard";

function Status() {
  const status = [
    { icon: faBuilding, counter: 120, title: "project" },
    { icon: faBuilding, counter: 120, title: "project" },
    { icon: faBuilding, counter: 120, title: "project" },
    { icon: faBuilding, counter: 120, title: "project" },
  ];
  return (
    <>
      <div className=" container">
        <div className="row w-100 gap-4 justify-content-center mt-4">
          {status.map((status, index) => (
            <StatusCard
              key={index}
              icon={status.icon}
              counter={status.counter}
              title={status.title}
            ></StatusCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Status;
