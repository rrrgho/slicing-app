import HomeIcon from "../assets/images/icon-home.png";
import NetworkIcon from "../assets/images/icon-network.png";
import PostIcon from "../assets/images/icon-post.png";
import NotifIcon from "../assets/images/icon-notif.png";
import JobIcon from "../assets/images/icon-jobs.png";

const Menu = () => {
  return (
    <div className="flex justify-around h-[50px] border-t-2 pt-1">
      <div className=" pl-2">
        <button className="bg-transparent border-0 h-full w-full">
          <img src={HomeIcon} className="h-full" alt="Icon" />
        </button>
      </div>
      <div className=" pl-2">
        <button className="bg-transparent border-0 h-full w-full">
          <img src={NetworkIcon} className="h-full" alt="Icon" />
        </button>
      </div>
      <div className=" pl-2">
        <button className="bg-transparent border-0 h-full w-full">
          <img src={PostIcon} className="h-full" alt="Icon" />
        </button>
      </div>
      <div className=" pl-2">
        <button className="bg-transparent border-0 h-full w-full">
          <img src={NotifIcon} className="h-full" alt="Icon" />
        </button>
      </div>
      <div className=" pl-2">
        <button className="bg-transparent border-0 h-full w-full">
          <img src={JobIcon} className="h-full" alt="Icon" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
