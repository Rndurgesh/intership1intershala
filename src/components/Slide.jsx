import React from "react";
import "./slide.scss";
import com from "../../public/com.jpg";

export default function Slide() {
  return (
    <div className="sm">
      <div className="smh">Related deals you might like for</div>
      <div className="sm_cont">
        <div className="smcc">
          <div>
            <img src={com} alt="" className="simg" />
          </div>
          <div className="sp">
            <p>20% Off</p>
            <p>Limited Time</p>
          </div>
          <div className="webb">
            <b>Webbuilder</b> 1
          </div>
          <div className="stext">
            Computer Modern classic with <br /> wix support
          </div>
          <div className="sprice">
            <p className="sp1">$39.96</p>
            <p className="sp2">$49.96</p>
            <p className="sp3">(20% off)</p>
          </div>
          <button className="sbtn">View Deal</button>
        </div>
        <div className="smcc">
          <div>
            <img src={com} alt="" className="simg" />
          </div>
          <div className="sp">
            <p>20% Off</p>
            <p>Limited Time</p>
          </div>
          <div className="webb">
            <b>Webbuilder</b> 1
          </div>
          <div className="stext">
            Computer Modern classic with <br /> wix support
          </div>
          <div className="sprice">
            <p className="sp1">$39.96</p>
            <p className="sp2">$49.96</p>
            <p className="sp3">(20% off)</p>
          </div>
          <button className="sbtn">View Deal</button>
        </div>
        <div className="smcc">
          <div>
            <img src={com} alt="" className="simg" />
          </div>
          <div className="sp">
            <p>20% Off</p>
            <p>Limited Time</p>
          </div>
          <div className="webb">
            <b>Webbuilder</b> 1
          </div>
          <div className="stext">
            Computer Modern classic with <br /> wix support
          </div>
          <div className="sprice">
            <p className="sp1">$39.96</p>
            <p className="sp2">$49.96</p>
            <p className="sp3">(20% off)</p>
          </div>
          <button className="sbtn">View Deal</button>
        </div>
      </div>
    </div>
  );
}
