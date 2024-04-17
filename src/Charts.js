import React from "react";
import AreaChart from "./Components/HomePage/Charts/AreaChart";
import BarChart from "./Components/HomePage/Charts/BarChart";
import PieChart from "./Components/HomePage/Charts/PieChart";
import { NavLink } from "react-router-dom";

const Charts = () => {
  return (
    <>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Charts</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item">
                <NavLink to="/">Dashboard</NavLink>
              </li>
              <li className="breadcrumb-item active">Charts</li>
            </ol>
            <div className="card mb-4">
              <div className="card-body">
                Chart.js is a third party plugin that is used to generate the
                charts in this template. The charts below have been customized -
                for further customization options, please visit the official
                <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                  Chart.js documentation
                </a>
                .
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                Area Chart Example
              </div>
              <div className="card-body">
                <AreaChart/>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-bar me-1"></i>
                    Bar Chart Example
                  </div>
                  <div className="card-body">
                    <BarChart/>
                  </div>
                  <div className="card-footer small text-muted">
                    Updated yesterday at 11:59 PM
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-pie me-1"></i>
                    Pie Chart Example
                  </div>
                  <div className="card-body">
                    <PieChart />
                  </div>
                  <div className="card-footer small text-muted">
                    Updated yesterday at 11:59 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright &copy; Your Website 2023</div>
              <div>
                <NavLink to="#">Privacy Policy</NavLink>
                &middot;
                <NavLink to="#">Terms &amp; Conditions</NavLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Charts;
