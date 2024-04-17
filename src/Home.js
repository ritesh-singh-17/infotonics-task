import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import CardsSection from "./Components/HomePage/CardsSection";
import Employees from "./Data/DataTableData";
import DataTable from "./Components/HomePage/DataTable";
import BarChart from "./Components/HomePage/Charts/BarChart";
import AreaChart from "./Components/HomePage/Charts/AreaChart";
import { NavLink } from "react-router-dom";

const Home = () => {
  
  return (
    <>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <CardsSection />
              <div className="row">
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-area me-1"></i>
                      Area Chart Example
                    </div>
                    <div className="card-body">
                      <AreaChart />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <BarChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  DataTable Example
                </div>
                <div className="card-body">
                <DataTable/>
                  
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

export default Home;
