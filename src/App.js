import "./styles.css";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import Home from "./component/Home";
export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-3 pe-0">
          <Sidebar />
        </div>
        <div className="col-9 ps-0">
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
}
