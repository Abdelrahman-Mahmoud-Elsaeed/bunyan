import { Navbar } from "@component/Dashboard";
import { Sidebar } from "@component/Dashboard";
import { useState } from "react";
import {Outlet} from "react-router-dom"
import Footer from "../../component/Dashboard/Footer/Footer";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`w-100 d-flex ${styles.main}`}>
          <Sidebar isOpen={isOpen}/>
          <main className="w-100">
            <Outlet></Outlet>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Dashboard;
