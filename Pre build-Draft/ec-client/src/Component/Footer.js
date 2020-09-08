import React, { useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

function Footer() {
  const [name, setnewName] = useState(null);
  const updatesignupEmail = (e) => {
    setnewName(e.currentTarget.value);
  };

  let signupEmail = (e) => {
    console.log("dfdsxx", e.currentTarget.emailForSignupOnly.value);

    e.preventDefault();
    e.currentTarget.emailForSignupOnly.value = "";
  };

  return (
    <div className="footer" style={{}}>
      <div className="container" style={{ width: "100vh" }}>
        <div className="row" style={{ marginTop: "0.5em" }}>
          {/* colum 1 */}
          <div className="col" style={{ maxWidth: "16rem" }}>
            <h4> Yogaoutlet Ltd</h4>
            <ul className="list-unstyled">
              <li>(+44) 123-123-1234</li>
              <li>London, UK</li>
              <li>123 street London road</li>
            </ul>
          </div>

          {/* colum 2 */}

          <div className="col" style={{ maxWidth: "25rem" }}>
            <h4> ABOUT</h4>
            <ul className="list-unstyled">
              <li> 123-123-1234</li>
              <li>London, UK</li>
              <li>123 street London road</li>
            </ul>
          </div>
          {/* colum 3 */}
          <div></div>

          <div className="col" style={{ maxWidth: "45rem", marginLeft: "23vh" }}>
            <h4> SIGN UP FOR EMAIL</h4>
            <ul className="list-unstyled">
              <li>For yoga updates, offers, news and promotions</li>
              <li>
                {
                  <form style={{ postion: "block" }} onSubmit={signupEmail} className="input-group">
                    <input
                      type="text"
                      placeholder="Enter here your email"
                      id="forSignupemail"
                      class="form-control inputBlock"
                      name="emailForSignupOnly"
                      value={name}
                      onChange={updatesignupEmail}
                      style={{ maxWidth: "19rem" }}
                    />
                    <ButtonGroup>
                      <Button className="btn buttonBlock" variant="primary" type="submit">
                        SIGNUP
                      </Button>
                    </ButtonGroup>
                  </form>
                }
              </li>
            </ul>
          </div>
        </div>
        <hr  style={{paddingBottom:"2em",margin:"0"}}/>

        <div className="row" style={{ marginBottom: "4rem", height:"100vh" }}>
          <p className="col-sm">@copy;{new Date().getFullYear()} Yogaoutlet Ltd | ALL right reserved | Terms of Service | Privacy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;