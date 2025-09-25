import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Symbols from "./svgs/Symbols";
import Hamburgermenu from "./svgs/Hamburgermenu";
import Notificationbell from "./svgs/Notificationbell";

export type TopHeaderType = {
  className?: string;
};

const TopHeader: FunctionComponent<TopHeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-white h-[77px] flex items-center justify-center py-num-22 px-num-80 box-border sticky w-full top-[0] [background:#ffffff] text-left text-num-14 text-darkslategray-200 font-roboto lg:pl-num-40 lg:pr-num-40 lg:box-border md:pl-num-24 md:pr-num-24 md:box-border ${className}`}
    >
      <div className="flex items-center justify-between gap-0">
        <button
          className="cursor-pointer [border:none] p-num-0 bg-[transparent] relative w-num-174 h-num-33 overflow-hidden"
          onClick={onFickleflightLogoClick}
        >
          <Symbols className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full" />
        </button>
        <div className="flex items-center justify-end gap-9 sm:flex">
          <div className="flex items-center justify-end gap-[30px] md:hidden">
            <div
              className="relative cursor-pointer"
              onClick={onFickleflightLogoClick}
            >
              Explore
            </div>
            <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] relative text-num-14 font-roboto text-cornflowerblue-200 text-left inline-block">
              Search
            </button>
            <div
              className="relative cursor-pointer"
              onClick={onHotelsTextClick}
            >
              Hotels
            </div>
            <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] relative text-num-14 font-roboto text-darkslategray-200 text-left inline-block">
              Offers
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Hamburgermenu className="relative w-6 h-6 hidden md:block" />
            <Notificationbell className="relative w-6 h-6" />
            <img
              className="rounded-[38px] w-9 h-9 object-cover"
              alt=""
              src="/unsplash-d1UPkiFd04A@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
