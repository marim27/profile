import React from "react";
import {Link} from "react-router-dom";

 class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className="bg-light pt-2">
    <div className="container pb-3">
    <div className="row">
    <div className="col-2">
    <i className="fa-brands fa-kaggle fs-1"></i>
    <i className="fa-solid fa-r fs-1"></i>
    </div>
    <Link to="/" className="col-2 text-decoration-none text-black fw-bold fs-5" >HOME</Link>
    <Link to="/about" className="col-2 text-decoration-none text-black fw-bold fs-5">ABOUT</Link>
    <Link to="/project" className="col-2 text-decoration-none text-black fw-bold fs-5">PROJECTS</Link>
    <Link to="/contact" className="col-3 text-decoration-none text-black fw-bold fs-5">CONTACT</Link>
    <div className="col-1">
    <i className="fa-brands fa-linkedin fs-5 me-3"></i>
    <i className="fa-brands fa-facebook-f fs-5 me-3"></i>
  <i className="fa-brands fa-twitter fs-5"></i>
    </div>
    </div>
    </div>

    </div>;
  }
}
export default Header