import React, { Component } from "react";
import Button from "react-bootstrap/Button";
class Footer extends Component {
  render() {
    return (
      <div className="bg-dark row text-light p-5 mb-3">
        <div className="col-2">
          <div>GET IN TOUCH</div>
          <div><i className="fa-solid fa-envelope text-light"></i> marim@yahoo.com</div>
          <div><i className="fa-solid fa-square-phone text-light"></i> 123-456-789</div>
        </div>
        <div className="col-3"></div>
        <div className="col-2 pt-4">
          <Button variant="outline-light">CONTACT ME</Button>
        </div>
        <div className="col-3"></div>
        <div className="col-2">
          <i className="fa-brands fa-linkedin fs-5 me-3 text-light"></i>
          <i className="fa-brands fa-facebook-f fs-5 me-3 text-light"></i>
          <i className="fa-brands fa-twitter fs-5 text-light"></i>
        </div>
      </div>
    );
  }
}

export default Footer;
