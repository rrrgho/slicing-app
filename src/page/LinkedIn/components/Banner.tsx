import BannerImage from "../assets/images/banner-linkedin.png";
import PP from "../assets/images/pp.jpeg";

const Banner = () => {
  return (
    <main>
      <div className="bg-white pb-5">
        <div className="w-full relative pt-2 bg-white">
          <div className="w-full">
            <img src={BannerImage} alt="Banner" />
          </div>
          <div className="w-full absolute top-0 left-0 pl-3 pt-10">
            <div className="bg-lime-300 w-[140px] h-[140px] rounded-full overflow-hidden">
              <img src={PP} alt="pp" />
            </div>
          </div>
          <div className="w-full mt-10 pt-10 px-3">
            <span className="text-[30px] font-semibold text-slate-600">
              Rian Gho
            </span>
          </div>
          <div className="w-full px-3 mt-[-5px]">
            <span className="text-[14px]">
              Software Engineer | Director of PT Doiscode Technology
            </span>
          </div>
          <div className="w-full px-3 mt-5">
            <span className="text-[14px] text-slate-500">
              Telkomsel - Universitas Mikroskil
            </span>
          </div>
          <div className="w-full px-3 text-slate-500 mt-[-5px]">
            <span className="text-[14px]">Jakarta, Indonesia</span>
          </div>
          <div className="w-full px-3 text-slate-500 mt-2">
            <span className="text-primary font-semibold text-[15px]">
              500+ Connections
            </span>
          </div>
        </div>
        <div className="w-full px-3 flex justify-between mt-3">
          <div className="w-[40%]">
            <button className="bg-primary w-full h-[40px] rounded-full">
              <span className="text-white font-semibold">Open To</span>
            </button>
          </div>
          <div className="w-[40%]">
            <button className="bg-white border-2 border-primary w-full h-[40px] rounded-full">
              <span className="text-primary font-semibold">Add Section</span>
            </button>
          </div>
          <div className="w-[10%]">
            <div className="bg-white border-2 text-center border-slate-500 leading-[-10px] w-[40px] pt-[2px] h-[40px] rounded-full">
              <span className="text-primary font-bold">...</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
