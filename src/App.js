import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import logo from "./logo.png";
import { MdCall } from "react-icons/md";
import { FaGlobe, FaFacebook } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="home">
      <div className="flex">
        <div className="left">
          <span>
            <img className="image1" src={image1}></img>
          </span>
        </div>
        <div className="right">
          <span className="logo">
            <img src={logo}></img>
          </span>
          <div>
            <p className="bold">
              C.R.I PUMPS WIN THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR
              THE 4th TIME.
            </p>

            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
              <img className="image2" src={image2}></img>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </ul>
          </div>
        </div>
      </div>
      <div className="mid">
        <p className="margin">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img className="image3" src={image3}></img>
        <p className="line">
          Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
          <hr className="hr" />
        </p>
        <h4 className="line">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h4>
        <div className="line">
          CHEMICALS PROCESS <span className="pipe">|</span> POWER{" "}
          <span className="pipe">|</span> WATER & WASTE WATER OILS & GAS{" "}
          <span className="pipe">|</span> PHARMA SUGARS & DISTILLERIES PAPER &
          PULP <span className="pipe">|</span> MARINE & DEFENCE METAL & MINING{" "}
          <span className="pipe">|</span> FOOD & BEVERAGE
          <span className="pipe">|</span> PETROCHEMICAL & REFINERIES{" "}
          <span className="pipe">|</span> SOLAR <span className="pipe">|</span>{" "}
          BUILDING <span className="pipe">|</span> HVAC{" "}
          <span className="pipe">|</span> FIRE FIGHTING{" "}
          <span className="pipe">|</span> AGRICULTURE & RESIDENTIAL
        </div>
      </div>
      <div className="bottom">
        <p>
          <span className="icon call">
            <MdCall />
          </span>
          Toll free 1800 200 1234
        </p>
        <p>
          <FaFacebook className="icon" />
          www.facebook.com/cripumps
        </p>
        <p>
          <FaGlobe className="icon" />
          www.crigroups.com
        </p>
      </div>
    </div>
  );
}

export default App;
