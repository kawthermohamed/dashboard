import { useState } from "react";
function Sidebar() {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar text-light p-3 ">
      <div className="title d-flex  justify-content-center align-items-center  border-secondary  border-bottom">
        <i className="bi bi-code-slash d-block me-3 fw-bold fs-3 "></i>
        <h2 className="">Sidebar</h2>
      </div>
      <ul className="list-unstyled text-start mb-0">
        <li
          className={active === 1 ? "active my-2" : "my-2"}
          onClick={(e) => {
            setActive(1);
          }}
        >
          <i className="bi bi-speedometer2 me-2"></i>
          <a href="/#" className="text-decoration-none text-light">
            Dashboard
          </a>
        </li>
        <li
          className={active === 2 ? "ative mb-2" : "mb-2"}
          onClick={(e) => {
            setActive(2);
          }}
        >
          <i className="bi bi-people me-2"></i>{" "}
          <a href="/#" className="text-decoration-none text-light">
            Users
          </a>
        </li>
        <li
          className={active === 3 ? "active mb-2" : "mb-2"}
          onClick={(e) => {
            setActive(3);
          }}
        >
          <i className="bi bi-list-task me-2"></i>
          <a href="/#" className="text-decoration-none text-light">
            Orders
          </a>
        </li>
        <li
          className={active === 4 ? "active" : ""}
          onClick={(e) => {
            setActive(4);
          }}
        >
          {" "}
          <i className="bi bi-motherboard me-2"></i>
          <a href="/#" className="text-decoration-none text-light">
            Report
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
