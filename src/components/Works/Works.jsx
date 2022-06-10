import React, { useContext } from "react";
import "./Works.css";
import Azure from "../../img/Azure.png";
import ReactNative from "../../img/ReactNative.png";
import Kivy from "../../img/Kivy.png";
import Tensorflow from "../../img/Tensorflow.png";
import Flask from "../../img/Flask.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Experienced in these
          </span>
          <span>Frameworks & Tools</span>
          <span>
            Experienced in Web & Application developer for more than one years
            in numerous projects,
            <br />
            competent, and focused application developer who is proficient in
            designing application development text
            <br />
            projects for civic issues, society , and other related projects.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Azure} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Kivy} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReactNative} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Tensorflow} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Flask} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
