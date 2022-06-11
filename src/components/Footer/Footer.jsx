import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>galisaishankar08@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/sai_shankar08/" >
            {" "}
            <Insta color="white" size={"3rem"} />{" "}
          </a>
          <a href="https://www.linkedin.com/in/galisaishankar/" >
            {" "}
            <LinkedIn color="white" size={"3rem"} />{" "}
          </a>
          <a href="https://github.com/galisaishankar08" >
            {" "}
            <Gitub color="white" size={"3rem"} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
