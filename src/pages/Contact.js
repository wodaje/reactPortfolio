import React from "react";
import "../css/styles.css";

function Contact() {
  return (
    <body className="pic2">
      <div className="col-md-6">
        <form className="block form-horizontal">
          <h3 className="block-header">Click to be Amazed</h3>
          <hr />
          <br />
          <div className="form-group">
            <div className="col-sm-8">
              <hr />
              <a
                className="link"
                href="https://www.linkedin.com/in/jeff-woda-1033933/"
                id="link"
              >
                Linkedin Profile
              </a>
              <hr />
              <a className="link" href="mailto: wodahouse@protonmail.com">
                wodahouse@protonmail.com
              </a>
              <hr />
              <a className="link" href="../images/Woda_CV_Main.pdf">
                Resume
              </a>
              <hr />
              <a className="link" href="https://github.com/wodaje">
                Gitty Hub and Go
              </a>
              <hr />
            </div>
            <br />
            <hr />
            <div className="wildCard center"></div>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Contact;
