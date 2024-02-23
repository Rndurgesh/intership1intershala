import React from "react";
import "./card1.scss";
import img from "../../public/com.jpg";
import rate1 from "../../public/rate1.jpg";
import rate2 from "../../public/rate2.jpg";
import rate3 from "../../public/rate3.jpg";
import rate4 from "../../public/rate4.jpg";
import { CiTrophy } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function Card1() {
  return (
    <div>
      <div className="cmain">
        <div className="fr">
          <button className="bdec">
            <i>
              <CiTrophy style={{ fontSize: "20px" }} />
            </i>
            <p>Best Choice</p>
          </button>
          <div className="ccont">
            <button className="bcir">1</button>
            <img src={img} alt="opps the image is gone 😥😥" />
          </div>
        </div>
        <div className="sc">
          <b className="wix">WixPro 72-Inch Responsive Website Builder</b>-
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue){" "}
          <br />
          <br />
          <b> Main highlights </b> <br />
          <div className="mh">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides. <br />
          </div>
          <span className="shm">
            <p>Show more</p>
            <i>
              <MdKeyboardArrowDown />
            </i>
          </span>
        </div>
        <div className="td">
          <div>
            <img src={rate1} alt="" className="td_img" />
          </div>
          <div>
            <button className="td_btn">View</button>
          </div>
        </div>
      </div>
      <div className="cmain">
        <div className="fr">
          <button className="bdec">
            <i>
              <IoDiamondSharp style={{ fontSize: "20px" }} />
            </i>
            <p>Best Choice</p>
          </button>
          <div className="ccont">
            <button className="bcir">2</button>
            <img src={img} alt="opps the image is gone 😥😥" />
          </div>
        </div>
        <div className="sc">
          <b className="wix">SiteCreaft 68-Inch Ultimate Web Design tudio</b>-
          Advanced Site Creation ToolKit, Intutive Drag-and-Drop Editor for
          Dynamic Websites and E-commerce Platforms(Green/White) <br />
          <br />
          <b> Main highlights </b> <br />
          <div className="mh">
            [What You Get]:Gain access to the SiteCraft design studio, featuring
            a robust selection of design elements, SEO optimization tools, and
            e-commerce integrations. <br />
          </div>
          <span className="shm">
            <p>Show more</p>
            <i>
              <MdKeyboardArrowDown />
            </i>
          </span>
        </div>
        <div className="td">
          <div>
            <img src={rate2} alt="" className="td_img" />
          </div>
          <div>
            <button className="td_btn">View</button>
          </div>
        </div>
      </div>
      <div className="cmain">
        <div className="fr">
          {/* <button className="bdec">
            <i>
              <IoDiamondSharp style={{ fontSize: "20px" }} />
            </i>
            <p>Best Choice</p>
          </button> */}
          <div className="ccont">
            <button className="bcir">3</button>
            <img src={img} alt="opps the image is gone 😥😥" />
          </div>
        </div>
        <div className="sc">
          <b className="wix">WixPro 72-Inch Responsive WEbsite Builder</b>-
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
          <br />
          <br />
          <b> Main highlights </b> <br />
          <div className="mh">
            [What You Get]: Receive the Wixpro website bullder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides. <br />
          </div>
          <span className="shm">
            <p>Show more</p>
            <i>
              <MdKeyboardArrowDown />
            </i>
          </span>
        </div>
        <div className="td">
          <div>
            <img src={rate3} alt="" className="td_img" />
          </div>
          <div>
            <button className="td_btn">View</button>
          </div>
        </div>
      </div>
      {/* last  */}
      <div className="cmain">
        <div className="fr">
          <div className="ccont">
            <button className="bcir">4</button>
            <img src={img} alt="opps the image is gone 😥😥" />
          </div>
        </div>
        <div className="sc">
          <b className="wix">CDK Resposive Builder: </b>
          An extensive library of widgets and apps, and detailed step-by-step
          guides
          <br />
          <br />
          <b> Main highlights </b> <br />
          <div className="cont4">
            <div className="cont4_b">
              <div className="cont4b_c">
                <div className="dig">9.9</div>
                <div>Building Pesponsive</div>
              </div>
              <div className="cont4b_c">
                <div className="dig">8.9</div>
                <div>Cool</div>
              </div>
              <div className="cont4b_c">
                <div className="dig">8.9</div>
                <div>Docs</div>
              </div>
            </div>
            <div className="exdiv">
              <div className="con1">Why we love it</div>
              <div className="con">
                <i style={{ fontSize: "25px" }}>
                  <RiCheckboxCircleFill />
                </i>
                <p>Documentation</p>
              </div>
              <div className="con">
                <i style={{ fontSize: "25px" }}>
                  <RiCheckboxCircleFill />
                </i>
                <p> Easy Use</p>
              </div>
              <div className="con">
                <i style={{ fontSize: "25px" }}>
                  <RiCheckboxCircleFill />
                </i>
                <p> Out Of Box</p>
              </div>
            </div>
            {/* <div className="shm">
              <p>Show more</p>
              <i>
                <MdKeyboardArrowDown />
              </i>
            </div> */}
          </div>
        </div>
        <div className="td">
          <div>
            <img src={rate4} alt="" className="td_img" />
          </div>
          <div>
            <button className="td_btn">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
