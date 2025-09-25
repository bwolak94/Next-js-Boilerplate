import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import Webscreen from "./svgs/Webscreen";
import Hamburgermenu from "./svgs/Hamburgermenu";
import Notificationbell from "./svgs/Notificationbell";
import Filters from "./svgs/Filters";
import Vector from "./svgs/Vector";
import Video from "./svgs/Video";
import Vector3 from "./svgs/Vector3";
import Vector4 from "./svgs/Vector4";
import Vector5 from "./svgs/Vector5";
import FeatureVideo from "./svgs/FeatureVideo";
import Logo1 from "./svgs/Logo1";
import SocialIcons1 from "./svgs/SocialIcons1";

export type HotelsPageType = {
  className?: string;
};

const HotelsPage: FunctionComponent<HotelsPageType> = ({ className = "" }) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div
        className={`bg-white max-w-full w-[1440px] overflow-hidden flex flex-col items-start text-left text-num-18 text-white font-roboto ${className}`}
      >
        <header className="self-stretch bg-white h-[77px] flex items-center justify-center py-num-22 px-num-80 box-border sticky w-full top-[0] [background:#ffffff] text-left text-num-14 text-darkslategray-200 font-roboto lg:pl-num-40 lg:pr-num-40 lg:box-border md:pl-num-24 md:pr-num-24 md:box-border">
          <div className="flex items-center justify-between gap-0">
            <div
              className="relative w-num-174 h-num-33 overflow-hidden cursor-pointer"
              onClick={onFickleflightLogoContainerClick}
            >
              <div className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%]">
                <Webscreen className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-9 sm:flex">
              <div className="flex items-center justify-end gap-[30px] md:hidden">
                <div
                  className="relative cursor-pointer"
                  onClick={onFickleflightLogoContainerClick}
                >
                  Explore
                </div>
                <div
                  className="relative cursor-pointer"
                  onClick={onSearchTextClick}
                >
                  Search
                </div>
                <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] relative text-num-14 font-roboto text-cornflowerblue-200 text-left inline-block">
                  Hotels
                </button>
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
        <div className="self-stretch flex flex-col items-start text-[42px] font-baloo-bhai">
          <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[193px] lg:py-num-21 lg:pl-[41px] lg:pr-num-40 lg:box-border md:py-num-21 md:px-num-24 md:box-border">
            <img
              className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.4px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/Banner-Background1@2x.png"
            />
            <div className="absolute top-[50px] left-[0px] w-[1440px] flex flex-col items-start py-num-0 px-num-80 box-border gap-2 lg:pl-num-40 lg:pr-num-40 lg:box-border md:pl-num-24 md:pr-num-24 md:box-border">
              <div className="relative tracking-num-0_02 leading-[48px] inline-block w-[1280px] sm:text-num-32">
                Stays in Los Angeles
              </div>
              <div className="flex items-start gap-2 text-center text-num-16 font-roboto">
                <div className="rounded-[27px] bg-white border-white border-solid border-[1px] flex items-center justify-center py-[11px] px-num-21 text-cornflowerblue-200">
                  <div className="relative tracking-num-0_04 capitalize font-medium sm:text-num-14">
                    Recommended
                  </div>
                </div>
                <div className="rounded-[27px] border-white border-solid border-[1px] flex items-center justify-center py-[11px] px-num-21">
                  <div className="relative tracking-num-0_04 capitalize font-medium sm:text-num-14">
                    Price
                  </div>
                </div>
                <div className="rounded-[27px] border-white border-solid border-[1px] flex items-center justify-center py-[11px] px-num-21">
                  <div className="relative tracking-num-0_04 capitalize font-medium sm:text-num-14">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start py-[50px] px-num-80 gap-5 text-darkslategray-300 lg:p-num-40 lg:box-border md:py-num-30 md:px-num-24 md:box-border">
          <div className="self-stretch flex items-start">
            <div className="flex-1 relative tracking-num-0_04 uppercase font-medium">
              200+ results
            </div>
            <div className="relative w-[86px] h-6 text-num-16">
              <Filters className="absolute top-[0px] left-[62px] w-6 h-6" />
              <div className="absolute top-[2.5px] left-[0px] tracking-num-0_04">
                Filters
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-start gap-[23px] text-num-16 text-gray-100">
            <div className="w-[561.9px] flex flex-col items-start gap-3 md:w-num-100%!important sm:gap-5">
              <div className="self-stretch rounded-num-10 bg-cornflowerblue-400 flex items-start gap-4 sm:flex-col">
                <img
                  className="relative rounded-tl-num-10 rounded-tr-num-0 rounded-br-num-0 rounded-bl-num-10 w-[260px] h-[220px] object-cover sm:w-num-100%!important sm:!rounded-[10px]"
                  alt=""
                  src="/Results-Image@2x.png"
                />
                <div className="flex flex-col items-start py-num-15 pl-num-0 pr-num-12 gap-[31px] sm:w-full sm:p-num-15 sm:box-border">
                  <div className="self-stretch flex items-start">
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="relative tracking-num-0_02 inline-block w-[146.9px]">
                        1 king bed standard
                      </div>
                      <b className="relative text-num-22 tracking-num-0_04 capitalize inline-block text-darkslategray-300 w-[232.9px]">
                        Holiday Inn Expre...
                      </b>
                      <div className="relative w-[173.9px] h-num-19 text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[55.97px] tracking-num-0_04 inline-block w-[117.9px]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[46px] h-num-19 text-darkslategray-300">
                          <div className="absolute top-[0px] left-[21.99px] tracking-num-0_04 font-medium inline-block w-6">
                            4.7
                          </div>
                          <Vector className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full" />
                        </div>
                      </div>
                    </div>
                    <Video className="relative w-6 h-6 cursor-pointer" />
                  </div>
                  <div className="relative w-[164.5px] h-[83.6px] text-num-22 text-darkslategray-300">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-num-0_02 capitalize">
                        $S 286
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-num-14 tracking-num-0_02">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-num-164 h-num-46">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-6 bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-num-18 tracking-num-0_04 font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-num-10 bg-cornflowerblue-400 flex items-start gap-4 text-darkslategray-300 sm:flex-col">
                <img
                  className="relative rounded-tl-num-10 rounded-tr-num-0 rounded-br-num-0 rounded-bl-num-10 w-[260px] h-[220px] object-cover sm:w-num-100%!important sm:!rounded-[10px]"
                  alt=""
                  src="/Results-Image1@2x.png"
                />
                <div className="flex flex-col items-start py-num-15 pl-num-0 pr-num-12 gap-[31px] sm:p-num-15 sm:box-border">
                  <div className="self-stretch flex items-start">
                    <div className="flex-1 relative h-[76px]">
                      <b className="absolute top-[25px] left-[0px] text-num-22 tracking-num-0_04 capitalize inline-block w-[273.9px]">
                        Freehand Los Angeles
                      </b>
                      <div className="absolute top-[0px] left-[0px] tracking-num-0_02 text-gray-100 inline-block w-[172.8px]">
                        Bed in Quad
                      </div>
                      <div className="absolute top-[57px] left-[0px] w-[202.8px] h-num-19 text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[64.07px] tracking-num-0_04 inline-block w-[138.7px]">
                          (1,941 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[54.1px] h-num-19 text-darkslategray-300">
                          <div className="absolute top-[0px] left-[25.86px] tracking-num-0_04 font-medium inline-block w-[28.2px]">
                            4.2
                          </div>
                          <Vector3 className="absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[164.5px] h-[83.6px] text-num-22">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-num-0_02 capitalize">
                        $S 198
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-num-14 tracking-num-0_02">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-num-164 h-num-46">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-6 bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-num-18 tracking-num-0_04 font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-num-10 bg-cornflowerblue-400 flex items-start gap-4 text-darkslategray-300 sm:flex-col">
                <img
                  className="relative rounded-tl-num-10 rounded-tr-num-0 rounded-br-num-0 rounded-bl-num-10 w-[260px] h-[220px] object-cover sm:w-num-100%!important sm:!rounded-[10px]"
                  alt=""
                  src="/Results-Image2@2x.png"
                />
                <div className="flex flex-col items-start py-num-15 pl-num-0 pr-num-12 gap-[31px] sm:p-num-15 sm:box-border">
                  <div className="self-stretch flex items-start">
                    <div className="flex-1 relative h-[76px]">
                      <b className="absolute top-[25px] left-[0px] text-num-22 tracking-num-0_04 capitalize inline-block w-[273.9px]">
                        The Westin Bonavent...
                      </b>
                      <div className="absolute top-[0px] left-[0px] tracking-num-0_02 text-gray-100 inline-block w-[172.8px]">
                        1 King, City view
                      </div>
                      <div className="absolute top-[57px] left-[0px] w-[202.8px] h-num-19 text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[64.07px] tracking-num-0_04 inline-block w-[138.7px]">
                          (1,002 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[54.1px] h-num-19 text-darkslategray-300">
                          <div className="absolute top-[0px] left-[25.86px] tracking-num-0_04 font-medium inline-block w-[28.2px]">
                            4.1
                          </div>
                          <Vector4 className="absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[164.5px] h-[83.6px] text-num-22">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-num-0_02 capitalize">
                        $S 289
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-num-14 tracking-num-0_02">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-num-164 h-num-46">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-6 bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-num-18 tracking-num-0_04 font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-num-10 bg-cornflowerblue-400 flex items-start gap-4 sm:flex-col">
                <img
                  className="relative rounded-tl-num-10 rounded-tr-num-0 rounded-br-num-0 rounded-bl-num-10 w-[260px] h-[220px] object-cover sm:w-num-100%!important sm:!rounded-[10px]"
                  alt=""
                  src="/Results-Image3@2x.png"
                />
                <div className="flex flex-col items-start py-num-15 pl-num-0 pr-num-12 gap-[31px] sm:w-full sm:p-num-15 sm:box-border">
                  <div className="self-stretch flex items-start">
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="relative tracking-num-0_02 inline-block w-[146.9px]">
                        Deluxe King
                      </div>
                      <b className="relative text-num-22 tracking-num-0_04 capitalize inline-block text-darkslategray-300 w-[232.9px]">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="relative w-[173.9px] h-num-19 text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[55.97px] tracking-num-0_04 inline-block w-[117.9px]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[46px] h-num-19 text-darkslategray-300">
                          <div className="absolute top-[0px] left-[21.99px] tracking-num-0_04 font-medium inline-block w-6">
                            4.7
                          </div>
                          <Vector5 className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full" />
                        </div>
                      </div>
                    </div>
                    <FeatureVideo className="relative w-6 h-6 cursor-pointer" />
                  </div>
                  <div className="relative w-[164.5px] h-[83.6px] text-num-22 text-darkslategray-300">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-num-0_02 capitalize">
                        $S 286
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-num-14 tracking-num-0_02">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-num-164 h-num-46">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-6 bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-num-18 tracking-num-0_04 font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className="[border:none] self-stretch relative h-[600px] hidden md:block md:max-w-[1000px]"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className="[border:none] self-stretch flex-1 relative md:hidden"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start text-center text-cornflowerblue-300">
          <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="/Newsletter-Section-Background1@2x.png"
            />
            <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col items-center p-num-20 box-border gap-[30px] ml-[auto] mr-[auto] md:py-num-24 md:px-num-0 md:box-border sm:pl-num-24 sm:pr-num-24 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center gap-[7px]">
                <b className="self-stretch relative tracking-num-0_04 uppercase">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-num-30 text-darkslategray-100">
                  Get weekly updates
                </b>
              </div>
              <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-white border-whitesmoke border-solid border-[1px] flex flex-col items-start py-7 px-num-30 gap-[17px] text-left text-slategray">
                <div className="self-stretch flex flex-col items-start">
                  <div className="self-stretch relative leading-num-34">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start gap-2.5">
                  <div className="self-stretch flex flex-col items-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-roboto text-num-16 text-gray-300"
                      color="primary"
                      label="Your name"
                      size="medium"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-roboto text-num-16 text-gray-300"
                      color="primary"
                      label="Email address"
                      size="medium"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-num-0 bg-orange-200 rounded-num-4 w-num-164 h-14 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
                  <div className="overflow-hidden flex flex-col items-start py-num-8 px-num-22">
                    <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-white text-left">
                      submit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex items-start py-[33px] px-[84px] gap-11 text-left text-num-18 text-white font-roboto lg:p-num-40 lg:box-border md:flex-col md:pt-num-40 md:px-num-24 md:pb-num-30 md:box-border sm:py-num-30 sm:px-num-24 sm:box-border">
            <div className="flex-1 flex flex-col items-start gap-3.5 !!mb-[40pximportant] md:flex-[unset] md:self-stretch">
              <Logo1 className="relative w-num-174 h-num-33" />
              <div className="self-stretch relative leading-num-27">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <SocialIcons1 className="relative w-[130px] h-[30px]" />
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
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
