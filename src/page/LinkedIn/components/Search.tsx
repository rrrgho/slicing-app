import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchChat = () => {
  return (
    <div className="w-full backdrop-blue bg-slate-100 rounded-lg flex flex-row p-1">
      <div className="w-1/6 pl-2">
        <FontAwesomeIcon icon={faSearch} className="text-slate-400" />
      </div>
      <div className="w-5/6">
        <input
          placeholder="Search"
          type="text"
          className="bg-transparent focus:outline-none text-white w-full"
        />
      </div>
    </div>
  );
};

export default SearchChat;
