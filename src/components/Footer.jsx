import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="fmain">
      <div className="d1">
        <p className="d1head">CATEGORIES</p>
        <p className="wht">Web Builder</p>
        <p className="wht">Hosting</p>
        <p className="wht">data Center</p>
        <p className="wht">Robotic-Automation</p>
      </div>
      <div className="d1">
        <p className="d1head">CONTACT</p>
        <p className="wht">Contact</p>
        <p className="wht">Privacy Policy</p>
        <p className="wht">Terms Of Service</p>
        <p className="wht">Categories</p>
        <p className="wht">About</p>
      </div>
      <div className="icon">
        United States{" "}
        <i>
          {" "}
          <MdKeyboardArrowDown />
        </i>
      </div>
    </div>
  );
}
