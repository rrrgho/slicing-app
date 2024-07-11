import AddCamera from "./AddCamera";
import AddChat from "./AddChat";

const Header = () => {
  return (
    <div className="w-full flex h-[50px] justify-between">
      <div className="w-3/6 text-center">
        <span className="text-white text-[25px] font-bold"></span>
      </div>
      <div className="w-3/6 text-center">
        <span className="text-white text-2xl font-bold">Chats</span>
      </div>
      <div className="w-2/6 flex flex-row">
        <div className="w-full mr-2 pt-1">
          <AddCamera />
        </div>
        <div className="w-full">
          <AddChat />
        </div>
      </div>
    </div>
  );
};

export default Header;
