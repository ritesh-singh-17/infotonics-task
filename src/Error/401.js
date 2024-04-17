import React from "react";
import { NavLink } from "react-router-dom";

const Error401 = () => {
  return (
    <div className="w-100">
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <h1 className="display-1">401</h1>
                    <p className="lead">Unauthorized</p>
                    <p>Access to this resource is denied.</p>
                    <NavLink to="/">
                      <i className="fas fa-arrow-left me-1"></i>
                      Return to Dashboard
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutError_footer">
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
      </div>
    </div>
  );
};

export default Error401;
