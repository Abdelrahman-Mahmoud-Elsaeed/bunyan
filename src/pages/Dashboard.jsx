import {Navbar} from "@component/Dashboard";
import {Sidebar} from "@component/Dashboard";
import {useState} from "react";

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
    </>
  )
}

export default Dashboard;