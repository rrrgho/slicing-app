import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchChat from "./Search";
import { faArrowLeftLong, faGear } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <main>
      <div className="w-full bg-white flex">
        <div className="w-1/6 text-center">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="text-slate-500 text-[22px] mt-1"
          />
        </div>
        <div className="w-4/6">
          <SearchChat />
        </div>
        <div className="w-1/6 text-center">
          <FontAwesomeIcon
            icon={faGear}
            className="text-slate-500 text-[22px] mt-1"
          />
        </div>
      </div>
    </main>
  );
};

export default Header;
