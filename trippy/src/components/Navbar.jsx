import React from "react";
import {
  Link
} from "react-router-dom";
export class Navbar extends React.Component {

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-color">
          <div className="container-fluid">
          <Link className="nav-link active text-white"  to="/">HOME</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Hotels</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
