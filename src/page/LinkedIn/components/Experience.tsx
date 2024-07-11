import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TelkomselExp from "../assets/images/exp-telkomsel.png";
import DetikExp from "../assets/images/exp-detik.png";
import GicExp from "../assets/images/exp-gic.png";

import TelkomselThumb from "../assets/images/thumb-telkomsel.png";
import DetikThumb from "../assets/images/thumb-detik.png";
import GicThumb from "../assets/images/thum-gic.png";

const Experience = () => {
  return (
    <main>
      <div className="mt-3 bg-white">
        <div className="w-full flex justify-between p-3">
          <div className="w-4/6">
            <span className="text-slate-500 font-semibold">Experience</span>
          </div>
          <div className="w-2/6 flex justify-end items-center content-center">
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="text-[20px] mr-5 text-slate-500"
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[22px] text-slate-500"
            />
          </div>
        </div>

        <div className="w-full flex border-b-2 pb-5 justify-center">
          <div className="w-[20%]">
            <img src={TelkomselExp} alt="Exp" className="w-[90px] h-[90px]" />
          </div>
          <div className="w-[80%] pt-2">
            <div>
              <div className="w-full">
                <span className="font-semibold">Frontend Lead Engineer</span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Telkomsel - Fulltime
                </span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Feb 2021 - Present. 3 yrs 5 mos
                </span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Jakarta, Indonesia - Hybrid
                </span>
              </div>
              <div className="w-full mt-3 leading-[17px]">
                <span className="text-[14px] text-slate-500">
                  Telkomsel is the biggest Tellecommunication and Internet
                  Provider in Indonesia, I am assoc...
                  <span className="text-slate-300 text-[12px]">See more</span>
                </span>
              </div>
              <div className="w-full mt-3 leading-[17px]">
                <span className="text-[14px] font-semibold">
                  Team Leadership, Jira and +7 Skills
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between mt-2">
              <div className="w-[30%]">
                <img src={TelkomselThumb} alt="thumb" />
              </div>
              <div className="w-[70%] leading-[18px] pt-2">
                <span className="font-semibold text-[14px]">
                  My Telkomsel App - Loyalty Poin and Catalog
                </span>{" "}
                <br />
                <span className="font-medium text-slate-500 text-[13px]">
                  My Telkomsel App, Handling loyalty feature to provide customer
                  needs..
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex border-b-2 pb-5 mt-5 justify-center">
          <div className="w-[20%]">
            <img src={DetikExp} alt="Exp" className="w-[90px] h-[90px]" />
          </div>
          <div className="w-[80%] pt-2">
            <div>
              <div className="w-full">
                <span className="font-semibold">Frontend Engineer</span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Detikcom - Fulltime
                </span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Feb 2020 - Feb 2021. 1 yrs 1 mos
                </span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Jakarta Selatan, Indonesia - Hybrid
                </span>
              </div>
              <div className="w-full mt-3 leading-[17px]">
                <span className="text-[14px] text-slate-500">
                  Transmedia is one of online media and television in Indonesia,
                  I work as Senior Frontend Engin..
                  <span className="text-slate-300 text-[12px]">See more</span>
                </span>
              </div>
              <div className="w-full mt-3 leading-[17px]">
                <span className="text-[14px] font-semibold">
                  Team Leadership, Jira and +7 Skills
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between mt-2">
              <div className="w-[30%]">
                <img src={DetikThumb} alt="thumb" />
              </div>
              <div className="w-[70%] leading-[18px] pt-2">
                {/* <span className="font-semibold text-[14px]">
                  My Telkomsel App - Loyalty Poin and Catalog
                </span>{" "}
                <br />
                <span className="font-medium text-slate-500 text-[13px]">
                  My Telkomsel App, Handling loyalty feature to provide customer
                  needs..
                </span> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex border-b-2 pb-5 mt-5 justify-center">
          <div className="w-[20%]">
            <img src={GicExp} alt="Exp" className="w-[90px] h-[90px]" />
          </div>
          <div className="w-[80%] pt-2">
            <div>
              <div className="w-full">
                <span className="font-semibold">Frontend Engineer</span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Global Investa Capital ( GIC ) - Fulltime
                </span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Jan 2018 - Jan 2020. 1 yrs 1 mos
                </span>
              </div>
              <div className="w-full mt-[-5px]">
                <span className="text-[14px] text-slate-500">
                  Jakarta, Indonesia - Hybrid
                </span>
              </div>
              <div className="w-full mt-3 leading-[17px]">
                <span className="text-[14px] text-slate-500">
                  GIC is an online Forex and Cryptocurrency trading company,that
                  running with Blockchain an.
                  <span className="text-slate-300 text-[12px]">See more</span>
                </span>
              </div>
              <div className="w-full mt-3 leading-[17px]">
                <span className="text-[14px] font-semibold">
                  Jira , React JS, Blockchain
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between mt-2">
              <div className="w-[30%]">
                <img src={GicThumb} alt="thumb" />
              </div>
              <div className="w-[70%] leading-[18px] pt-2">
                {/* <span className="font-semibold text-[14px]">
                  My Telkomsel App - Loyalty Poin and Catalog
                </span>{" "}
                <br />
                <span className="font-medium text-slate-500 text-[13px]">
                  My Telkomsel App, Handling loyalty feature to provide customer
                  needs..
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
