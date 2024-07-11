import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Menu from "./components/Menu";

const LinkedIn = () => {
  return (
    <main>
      <div className="h-screen relative bg-slate-100">
        <div className="w-full bg-white pb-3 fixed top-0 left-0 z-50">
          <Header />
        </div>
        <div className="w-full pt-7">
          <Banner />
        </div>
        <div className="w-full">
          <Experience />
        </div>
        <div className="w-full bg-white fixed bottom-0 left-0 h-[90px]">
          <Menu />
        </div>
      </div>
    </main>
  );
};

export default LinkedIn;
