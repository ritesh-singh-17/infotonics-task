import React from "react";
import { NavLink } from "react-router-dom";

const LightSideNav = () => {
  return (
    <>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Sidenav Light</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item">
                <NavLink to="/">Dashboard</NavLink>
              </li>
              <li className="breadcrumb-item active">Sidenav Light</li>
            </ol>
            <div className="card mb-4">
              <div className="card-body">
                This page is an example of using the light side navigation
                option. By appending the
                <code>.sb-sidenav-light</code>
                class to the
                <code>.sb-sidenav</code>
                class, the side navigation will take on a light color scheme.
                The
                <code>.sb-sidenav-dark</code>
                is also available for a darker option.
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

export default LightSideNav;
