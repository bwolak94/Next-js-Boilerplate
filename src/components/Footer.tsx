import { FunctionComponent } from "react";
import Logo from "./svgs/Logo";
import SocialIcons from "./svgs/SocialIcons";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex items-start py-[33px] px-[84px] gap-11 text-left text-num-18 text-white font-roboto lg:p-num-40 lg:box-border md:flex-col md:pt-num-40 md:px-num-24 md:pb-num-30 md:box-border sm:py-num-30 sm:px-num-24 sm:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start gap-3.5 !!mb-[40pximportant] md:flex-[unset] md:self-stretch">
        <Logo className="relative w-num-174 h-num-33" />
        <div className="self-stretch relative leading-num-27">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <SocialIcons className="relative w-[130px] h-[30px]" />
      </div>
      <div className="relative border-gray-200 border-solid border-r-[1px] box-border w-px h-[157.9px] md:hidden" />
      <div className="flex-1 flex items-start justify-between gap-0 text-num-16 md:flex-[unset] md:self-stretch sm:flex-col">
        <div className="relative w-num-197_3 h-num-159_8 sm:!!mb-[40pximportant]">
          <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.7px]">
            About Us
          </div>
          <div className="absolute top-[0px] left-[0px] text-num-20 leading-num-27 font-medium inline-block w-[174.7px]">
            Company
          </div>
          <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.3px]">
            News
          </div>
          <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.1px]">
            Careers
          </div>
          <div className="absolute top-[140.76px] left-[0px] inline-block w-num-197_3">
            How we work
          </div>
        </div>
        <div className="relative w-num-197_3 h-num-159_8 sm:!!mb-[40pximportant]">
          <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.6px]">
            Account
          </div>
          <div className="absolute top-[0px] left-[0px] text-num-20 leading-num-27 font-medium inline-block w-[131.6px]">
            Support
          </div>
          <div className="absolute top-[78.76px] left-[0px] inline-block w-num-197_3">
            Support Center
          </div>
          <div className="absolute top-[109.76px] left-[0px] inline-block w-[53px]">
            FAQ
          </div>
          <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.4px]">
            Accessibility
          </div>
        </div>
        <div className="relative w-num-197_3 h-num-159_8">
          <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.9px]">
            Covid Advisory
          </div>
          <div className="absolute top-[0px] left-[0px] text-num-20 leading-num-27 font-medium inline-block w-[76.7px]">
            More
          </div>
          <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.4px]">
            Airline Fees
          </div>
          <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.6px]">
            Tips
          </div>
          <div className="absolute top-[140.76px] left-[0px] inline-block w-num-197_3">
            Quarantine Rules
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
