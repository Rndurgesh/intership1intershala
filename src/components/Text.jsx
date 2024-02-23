import React from "react";
import "./text.scss";
import { GoChevronDown } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export default function Text() {
  return (
    <div className="tm">
      <div className="tm_hl">Best Website builders in the US </div>
      <div className="tm_2">
        <div className="tm2_f">
          <div className="tm2f_f">
            <i>
              <CiCircleCheck />
            </i>
            <p>Last Updated - Feb 23, 2024</p>
          </div>
          <div className="tm2f_f">
            <i>
              <CiCircleInfo />
            </i>
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="tm2_s">
          Top Relevent
          <i className="tm2_sicon">
            <GoChevronDown />
          </i>
        </div>
      </div>
      <div className="tm_3">
        <div className="tm3_f">TOOLS</div>
        <div>AWS Builder</div>
        <div>Start Builder</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>Blue Hosting</div>
      </div>
      <div className="tm_4">
        <div>Home </div>
        <div>&gt;</div>
        <div>Hosting for all </div>
        <div>&gt;</div>
        <div>Hosting </div>
        <div>&gt;</div>
        <div>Hosting6 </div>
        <div>&gt;</div>
        <div>Hosting5 </div>
      </div>
    </div>
  );
}
