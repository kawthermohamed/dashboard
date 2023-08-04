import PieChart from "./piechart.js";

import LineChart from "./linechart.js";

function Home() {
  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 ">
            <div className="d-flex align-items-center justify-content-around border  border-secondary bg-white p-4">
              <i class="bi bi-currency-dollar fs-1 text-success"></i>
              <div>
                <span>sales</span>
                <h2>256</h2>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-6 col-12 p-3 ">
            <div className="d-flex align-items-center justify-content-around border  border-secondary bg-white p-4">
              <i class="bi bi-truck fs-1 text-primary"></i>
              <div>
                <span>Delivery</span>
                <h2>240</h2>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-6 col-12 p-3 ">
            <div className="d-flex align-items-center justify-content-around border  border-secondary bg-white p-4">
              <i class="bi bi-arrow-up fs-1 text-danger"></i>
              <div>
                <span>Increase</span>
                <h2>20%</h2>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-6 col-12 p-3 ">
            <div className="d-flex align-items-center justify-content-around border  border-secondary bg-white p-4">
              <i class="bi bi-currency-dollar fs-1 text-warning"></i>
              <div>
                <span>sales</span>
                <h2>256</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 p-3">
            <LineChart />
          </div>
          <div className="col-12 col-md-6 p-3">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
