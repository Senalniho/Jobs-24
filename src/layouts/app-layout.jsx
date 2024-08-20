import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className=" p-10 text-center bg-gray-800 mt-10 text-white font-bold">
        Made with ❤️ by Jobs-24
      </div>
    </div>
  );
};

export default Applayout;
