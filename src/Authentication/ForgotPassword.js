import React from "react";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="bg-primary w-100">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Password Recovery
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="small mb-3 text-muted">
                        Enter your email address and we will send you a link to
                        reset your password.
                      </div>
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label for="inputEmail">Email address</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <NavLink className="small" to="/login">
                            Return to login
                          </NavLink>
                          <NavLink className="btn btn-primary" to="/login">
                            Reset Password
                          </NavLink>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <NavLink to="/register">Need an account? Sign up!</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
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

export default ForgotPassword;
