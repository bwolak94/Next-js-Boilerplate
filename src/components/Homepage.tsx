import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import Symbols1 from "./svgs/Symbols1";
import { useNavigate } from "react-router-dom";
import Hamburgermenu from "./svgs/Hamburgermenu";
import Notificationbell from "./svgs/Notificationbell";
import Flighticons from "./svgs/Flighticons";
import HotelIcon from "./svgs/HotelIcon";
import Ticket from "./svgs/Ticket";
import EatsIcon from "./svgs/EatsIcon";
import Train from "./svgs/Train";
import Taxi from "./svgs/Taxi";
import Movie from "./svgs/Movie";
import Arrowright from "./svgs/Arrowright";
import Arrowright1 from "./svgs/Arrowright1";
import Arrowright2 from "./svgs/Arrowright2";
import Arrowright3 from "./svgs/Arrowright3";
import Video1 from "./svgs/Video1";
import Vector6 from "./svgs/Vector6";
import Vector7 from "./svgs/Vector7";
import Vector8 from "./svgs/Vector8";
import Video2 from "./svgs/Video2";
import Vector9 from "./svgs/Vector9";
import Arrowright4 from "./svgs/Arrowright4";
import Logo2 from "./svgs/Logo2";
import SocialIcons11 from "./svgs/SocialIcons11";

export type HomepageType = {
  className?: string;
};

const Homepage: FunctionComponent<HomepageType> = ({ className = "" }) => {
  const [outlinedDateTimePickerValue, setOutlinedDateTimePickerValue] =
    useState(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const onSearchTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div
          className={`bg-white max-w-full w-[1440px] overflow-hidden flex flex-col items-center gap-[69px] text-center text-num-18 text-white font-roboto hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200 ${className}`}
        >
          <div className="self-stretch flex flex-col items-center text-[61px] font-baloo-bhai">
            <header className="self-stretch bg-white h-[77px] flex items-center justify-center py-num-22 px-num-80 box-border sticky w-full top-[0] [background:#ffffff] text-left text-num-14 text-darkslategray-200 font-roboto lg:pl-num-40 lg:pr-num-40 lg:box-border md:pl-num-24 md:pr-num-24 md:box-border">
              <div className="flex items-center justify-between gap-0">
                <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] relative w-num-174 h-num-33 overflow-hidden">
                  <Symbols1 className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full" />
                </button>
                <div className="flex items-center justify-end gap-9 sm:flex">
                  <div className="flex items-center justify-end gap-[30px] md:hidden">
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] relative text-num-14 font-roboto text-cornflowerblue-200 text-left inline-block">
                      Explore
                    </button>
                    <div
                      className="relative cursor-pointer"
                      onClick={onSearchTextClick}
                    >
                      Search
                    </div>
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
            <div className="self-stretch relative h-[640px]">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.9px]" />
              <img
                className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
                alt=""
                src="/Banner-Background2@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col items-center justify-center py-num-0 px-[140px] box-border gap-[43px] md:pl-num-30 md:pr-num-30 md:box-border">
                <div className="self-stretch flex flex-col items-center gap-[5px]">
                  <div className="self-stretch relative leading-[67px] sm:text-[42px] sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-num-24 leading-8 font-roboto">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="self-stretch rounded-num-10 bg-white flex flex-col items-start p-num-20 gap-1 text-left text-num-20 text-darkslategray-300 font-roboto md:flex-col sm:mt-5">
                  <div className="self-stretch overflow-hidden flex items-center p-num-5 gap-[5px] sm:flex-col sm:items-start">
                    <b className="flex-1 relative tracking-num-0_04 uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-[#EAEAEA] sm:flex-[unset] sm:self-stretch">
                      Search flights
                    </b>
                    <div className="flex items-center sm:w-full">
                      <div className="relative w-[216.5px] h-[38px] sm:w-num-100%!important">
                        <FormControlLabel
                          className="absolute top-[0px] left-[0px]"
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className="absolute top-[0px] left-[106px]"
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex items-start md:flex-col">
                    <div className="flex items-start md:w-full sm:flex-col">
                      <div className="flex-1 flex flex-col items-center justify-center p-num-5 sm:w-full sm:flex-[unset] sm:self-stretch">
                        <Autocomplete
                          className="self-stretch"
                          size="medium"
                          disablePortal
                          options={[
                            "Singapore (SIN)",
                            "Sydney (SYD)",
                            "Siem Reap (REP)",
                            "Shanghai (PVG)",
                            "Sanya (SYX)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Departure"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Singapore -  Changi (SIN)"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center p-num-5 sm:w-full sm:flex-[unset] sm:self-stretch">
                        <Autocomplete
                          className="self-stretch"
                          size="medium"
                          sx={{ width: "100%" }}
                          disablePortal
                          options={[
                            "Clark (CRK)",
                            "Launceston (LST)",
                            "Kalibo (KLO)",
                            "Colombo CMB",
                            "Melbourne (AVV)",
                            "Los Angeles (LA)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Arrival"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Los Angeles (LA)"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center p-num-5 sm:w-full sm:flex-[unset] sm:self-stretch">
                        <div className="self-stretch">
                          <DatePicker
                            label="Date"
                            value={outlinedDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setOutlinedDateTimePickerValue(newValue);
                            }}
                            sx={{
                              "& .MuiPickersInputBase-sectionsContainer": {
                                width: "unset",
                              },
                            }}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                size: "medium",
                                fullWidth: true,
                                required: false,
                                autoFocus: false,
                                error: false,
                                color: "primary",
                                placeholder: "Date",
                              },
                              openPickerIcon: {
                                component: () => <></>,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-num-5 md:w-full md:text-left">
                      <button
                        className="cursor-pointer [border:none] p-num-0 bg-orange-200 rounded-num-4 w-num-164 h-14 overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-num-100%!important"
                        onClick={onSearchTextClick}
                      >
                        <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-white text-center inline-block w-[147px]">
                          Search flights
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-num-0 px-num-80 box-border gap-20 max-w-[1280px] text-left text-darkslategray-300 md:pl-num-30 md:pr-num-30 md:box-border">
            <div className="self-stretch flex flex-col items-start gap-5 md:block">
              <b className="relative tracking-num-0_04 uppercase inline-block w-[1268.1px]">
                Upcoming Flight
              </b>
              <div className="self-stretch flex items-start gap-9 text-num-24 text-cornflowerblue-300 md:flex-col">
                <div className="rounded-lg border-whitesmoke border-solid border-[1px] flex flex-col items-start p-num-20 gap-[21px] lg:w-[520px] md:w-full md:block md:mb-[30px]">
                  <div className="self-stretch flex items-center justify-between gap-0">
                    <div className="relative w-[72px] h-num-46">
                      <b className="absolute top-[0px] left-[0px] tracking-num-0_04 capitalize inline-block w-[44.7px]">
                        SIN
                      </b>
                      <div className="absolute top-[30px] left-[0px] text-num-14 tracking-num-0_02 capitalize text-gray-100 inline-block w-[72px]">
                        Singapore
                      </div>
                    </div>
                    <div className="relative w-[117.4px] h-[44.1px] text-num-14 text-gray-100">
                      <b className="absolute top-[28.09px] left-[23.69px] tracking-num-0_02 capitalize inline-block w-[65.7px]">
                        15H 55M
                      </b>
                      <Flighticons className="absolute top-[0px] left-[0px] w-[117.4px] h-6" />
                    </div>
                    <div className="relative w-[87.3px] h-num-46 text-right">
                      <b className="absolute top-[0px] left-[36px] tracking-num-0_04 capitalize inline-block w-[51.3px]">
                        LAX
                      </b>
                      <div className="absolute top-[30px] left-[0px] text-num-14 tracking-num-0_02 capitalize text-gray-100 inline-block w-[87.3px]">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative border-whitesmoke border-solid border-t-[1px] box-border h-px md:w-full" />
                  <div className="self-stretch flex items-center justify-between gap-0 text-num-14 text-gray-100">
                    <div className="relative tracking-num-0_02 capitalize inline-block w-[203.9px] shrink-0">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="relative tracking-num-0_02 text-right inline-block w-[87.2px] shrink-0">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="relative border-whitesmoke border-solid border-r-[1px] box-border w-px h-[146px] md:hidden" />
                <div className="flex flex-col items-start gap-5 text-num-18 text-lightgray md:w-full">
                  <div className="self-stretch relative tracking-num-0_04 uppercase">
                    Prepare for your trip
                  </div>
                  <div className="self-stretch flex items-start justify-between gap-0 sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                    <button
                      className="cursor-pointer [border:none] p-num-0 bg-[transparent] flex flex-col items-center justify-center gap-2 sm:pb-num-20 sm:box-border sm:w-[33.33%] sm:text-center"
                      onClick={onHotelsTextClick}
                    >
                      <HotelIcon className="relative w-num-65_4 h-num-65_4" />
                      <div className="relative text-num-15 tracking-num-0_04 font-roboto text-gray-100 text-left">
                        Hotel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] flex flex-col items-center justify-center gap-2 sm:pb-num-20 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-num-65_4 h-num-65_4">
                        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-sandybrown w-num-65_4 h-num-65_4" />
                        <Ticket className="absolute h-[47.86%] w-[48.32%] top-[26.03%] right-[25.88%] bottom-[26.11%] left-[25.8%] max-w-full overflow-hidden max-h-full" />
                      </div>
                      <div className="relative text-num-15 tracking-num-0_04 font-roboto text-gray-100 text-center">
                        Attractions
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] flex flex-col items-center justify-center gap-2 sm:pb-num-20 sm:box-border sm:w-[33.33%] sm:text-center">
                      <EatsIcon className="relative w-num-65_4 h-num-65_4" />
                      <div className="relative text-num-15 tracking-num-0_04 font-roboto text-gray-100 text-center">
                        Eats
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] flex flex-col items-center justify-center gap-2 sm:pb-num-20 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-num-65_4 h-num-65_4">
                        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gold w-num-65_4 h-num-65_4" />
                        <Train className="absolute h-[48.47%] w-[41.13%] top-[26.5%] right-[29.46%] bottom-[25.03%] left-[29.41%] max-w-full overflow-hidden max-h-full" />
                      </div>
                      <div className="relative text-num-15 tracking-num-0_04 font-roboto text-gray-100 text-center">
                        Commute
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] flex flex-col items-center justify-center gap-2 sm:pb-num-20 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[70px] h-num-65_4">
                        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue-100 w-[70px] h-num-65_4" />
                        <Taxi className="absolute h-[40.21%] w-[40.57%] top-[29.63%] right-[29.69%] bottom-[30.16%] left-[29.74%] max-w-full overflow-hidden max-h-full" />
                      </div>
                      <div className="relative text-num-15 tracking-num-0_04 font-roboto text-gray-100 text-center inline-block w-[32.1px]">
                        Taxi
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-num-0 bg-[transparent] flex flex-col items-center justify-center gap-2 sm:pb-num-20 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-num-65_4 h-num-65_4">
                        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-yellowgreen w-num-65_4 h-num-65_4" />
                        <Movie className="absolute h-[35.63%] w-[39.91%] top-[32.19%] right-[30.06%] bottom-[32.18%] left-[30.03%] max-w-full overflow-hidden max-h-full" />
                      </div>
                      <div className="relative text-num-15 tracking-num-0_04 font-roboto text-gray-100 text-center">
                        Movies
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start gap-6 text-cornflowerblue-300">
              <div className="self-stretch flex items-center sm:flex-col sm:self-start">
                <div className="flex flex-col items-start gap-1.5">
                  <b className="self-stretch relative tracking-num-0_04 uppercase">
                    Plan your next trip
                  </b>
                  <b className="self-stretch relative text-num-30 tracking-num-0_04 capitalize text-darkslategray-300 sm:text-num-22">
                    Most Popular Destinations
                  </b>
                </div>
                <button className="cursor-pointer [border:none] p-num-0 bg-white rounded-num-31 w-[231.4px] flex items-start gap-2.5 md:hidden">
                  <div className="relative text-num-18 tracking-num-0_04 font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-num-197_3 shrink-0">
                    View all destinations
                  </div>
                  <Arrowright className="relative w-6 h-6" />
                </button>
              </div>
              <div className="self-stretch flex items-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-num-16 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-num-10 h-[182px] overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/ParisImage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.6px)] top-[0px] right-[0.31px] left-[0.29px] flex items-start py-num-8 px-num-12 box-border">
                      <b className="flex-1 relative text-num-20 tracking-num-0_02 font-roboto text-white text-left">
                        Paris
                      </b>
                      <div className="relative w-[90.9px] h-[59px]">
                        <div className="absolute top-[21px] left-[0px] text-[38px] leading-[38px] font-baloo-bhai text-white text-right inline-block w-[90.9px]">
                          $699
                        </div>
                        <div className="absolute top-[0px] left-[38.39px] text-num-16 tracking-num-0_04 uppercase font-roboto text-white text-right inline-block w-[52.5px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-num-16 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-num-10 h-[182px] overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/GreeceImage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.6px)] top-[0px] right-[0.31px] left-[0.29px] flex items-start py-num-8 px-num-12 box-border">
                      <b className="flex-1 relative text-num-20 tracking-num-0_02 font-roboto text-white text-left">
                        Greece
                      </b>
                      <div className="relative w-[99.9px] h-[59px]">
                        <div className="absolute top-[21px] left-[0px] text-[38px] leading-[38px] font-baloo-bhai text-white text-right">
                          $1079
                        </div>
                        <div className="absolute top-[0px] left-[47.39px] text-num-16 tracking-num-0_04 uppercase font-roboto text-white text-right inline-block w-[52.5px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-num-16 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-num-10 h-[182px] overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/NorwayImage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.6px)] top-[0px] right-[0.31px] left-[0.29px] flex items-start py-num-8 px-num-12 box-border">
                      <b className="flex-1 relative text-num-20 tracking-num-0_02 font-roboto text-white text-left">
                        Norway
                      </b>
                      <div className="relative w-[90.9px] h-[59px]">
                        <div className="absolute top-[21px] left-[0px] text-[38px] leading-[38px] font-baloo-bhai text-white text-right inline-block w-[90.9px]">
                          $895
                        </div>
                        <div className="absolute top-[0px] left-[38.39px] text-num-16 tracking-num-0_04 uppercase font-roboto text-white text-right inline-block w-[52.5px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-num-16 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-num-10 h-[182px] overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/TuscanyImage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.6px)] top-[0px] right-[0.31px] left-[0.29px] flex items-start py-num-8 px-num-12 box-border">
                      <b className="flex-1 relative text-num-20 tracking-num-0_02 font-roboto text-white text-left">
                        Tuscany
                      </b>
                      <div className="relative w-[100.6px] h-[59px]">
                        <div className="absolute top-[21px] left-[0px] text-[38px] leading-[38px] font-baloo-bhai text-white text-right inline-block w-[100.6px]">
                          $1245
                        </div>
                        <div className="absolute top-[0px] left-[48.09px] text-num-16 tracking-num-0_04 uppercase font-roboto text-white text-right inline-block w-[52.5px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-num-31 bg-white w-[231.4px] hidden items-start gap-2.5 text-right md:flex md:mt-4">
                <div className="relative tracking-num-0_04 font-medium inline-block w-num-197_3 shrink-0 md:w-auto">
                  View all destinations
                </div>
                <Arrowright1 className="relative w-6 h-6" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-6 text-num-30">
              <div className="self-stretch flex items-center">
                <b className="flex-1 relative tracking-num-0_04 capitalize sm:text-num-22">
                  Recommended Holidays
                </b>
                <button className="cursor-pointer [border:none] p-num-0 bg-white rounded-num-31 w-[199.9px] flex items-start gap-2.5 md:hidden">
                  <div className="relative text-num-18 tracking-num-0_04 font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[165.9px] shrink-0">
                    View all holidays
                  </div>
                  <Arrowright2 className="relative w-6 h-6" />
                </button>
              </div>
              <div className="self-stretch flex items-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] flex-1 flex flex-col items-center box-border min-w-[230px] w-3/12 md:w-6/12 md:mb-8 sm:min-w-[250px] sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-num-10 rounded-b-num-0 max-w-full overflow-hidden h-[242px] object-cover"
                    alt=""
                    src="/unsplash-5MV818tzxeo@2x.png"
                  />
                  <div className="self-stretch rounded-t-num-0 rounded-b-num-10 bg-white border-whitesmoke border-solid border-[1px] flex flex-col items-center justify-center py-num-20 px-num-16">
                    <div className="self-stretch flex items-center">
                      <div className="flex flex-col items-start gap-[3px]">
                        <div className="self-stretch relative text-num-20 tracking-num-0_02 font-medium font-roboto text-darkslategray-200 text-left">
                          Bali
                        </div>
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-num-32 leading-num-34 font-baloo-bhai text-cornflowerblue-200 text-right">
                        $899
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] flex-1 flex flex-col items-center box-border min-w-[230px] w-3/12 md:w-6/12 md:mb-8 sm:min-w-[250px] sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-num-10 rounded-b-num-0 max-w-full overflow-hidden h-[242px] object-cover"
                    alt=""
                    src="/SwitzerlandImage@2x.png"
                  />
                  <div className="self-stretch rounded-t-num-0 rounded-b-num-10 bg-white border-whitesmoke border-solid border-[1px] flex flex-col items-center justify-center py-num-20 px-num-16">
                    <div className="self-stretch flex items-center">
                      <div className="flex flex-col items-start gap-[3px]">
                        <div className="self-stretch relative text-num-20 tracking-num-0_02 font-medium font-roboto text-darkslategray-200 text-left">
                          Swiss
                        </div>
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-darkgray text-left">
                          6D5N
                        </div>
                      </div>
                      <div className="relative text-num-32 leading-num-34 font-baloo-bhai text-cornflowerblue-200 text-right">
                        $900
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] flex-1 flex flex-col items-center box-border min-w-[230px] w-3/12 md:w-6/12 sm:min-w-[250px] sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-num-10 rounded-b-num-0 max-w-full overflow-hidden h-[242px] object-cover"
                    alt=""
                    src="/BoracayImage@2x.png"
                  />
                  <div className="self-stretch rounded-t-num-0 rounded-b-num-10 bg-white border-whitesmoke border-solid border-[1px] flex flex-col items-center justify-center py-num-20 px-num-16">
                    <div className="self-stretch flex items-center">
                      <div className="flex flex-col items-start gap-[3px]">
                        <div className="self-stretch relative text-num-20 tracking-num-0_02 font-medium font-roboto text-darkslategray-200 text-left">
                          Boracay
                        </div>
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-darkgray text-left">
                          5D4N
                        </div>
                      </div>
                      <div className="relative text-num-32 leading-num-34 font-baloo-bhai text-cornflowerblue-200 text-right">
                        $699
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-num-0 px-num-16 bg-[transparent] flex-1 flex flex-col items-center box-border min-w-[230px] w-3/12 md:w-6/12 sm:min-w-[250px] sm:w-full">
                  <img
                    className="self-stretch relative rounded-t-num-10 rounded-b-num-0 max-w-full overflow-hidden h-[242px] object-cover"
                    alt=""
                    src="/PalawanImage@2x.png"
                  />
                  <div className="self-stretch rounded-t-num-0 rounded-b-num-10 bg-white border-whitesmoke border-solid border-[1px] flex flex-col items-center justify-center py-num-20 px-num-16">
                    <div className="self-stretch flex items-center">
                      <div className="flex flex-col items-start gap-[3px]">
                        <div className="self-stretch relative text-num-20 tracking-num-0_02 font-medium font-roboto text-darkslategray-200 text-left">
                          Palawan
                        </div>
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-num-32 leading-num-34 font-baloo-bhai text-cornflowerblue-200 text-right">
                        $789
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-num-31 bg-white w-[199.9px] hidden items-start gap-2.5 text-right text-num-18 text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
                <div className="relative tracking-num-0_04 font-medium inline-block w-[165.9px] shrink-0 md:w-auto">
                  View all holidays
                </div>
                <Arrowright3 className="relative w-6 h-6" />
              </div>
            </div>
            <form className="m-0 self-stretch flex flex-col items-start gap-5">
              <div className="self-stretch flex items-center justify-center">
                <div className="flex-1 relative h-[35px]">
                  <b className="absolute top-[0px] left-[0px] text-num-30 tracking-num-0_04 capitalize inline-block font-roboto text-darkslategray-300 text-left w-[1105.3px] sm:text-num-22">
                    Popular Stays
                  </b>
                </div>
                <button
                  className="cursor-pointer [border:none] p-num-0 bg-white rounded-num-31 flex items-start gap-2.5 md:hidden"
                  onClick={onHotelsTextClick}
                >
                  <div className="relative text-num-18 tracking-num-0_04 font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.7px] shrink-0">
                    View all stays
                  </div>
                  <Arrowright2 className="relative w-6 h-6" />
                </button>
              </div>
              <div className="self-stretch flex items-center ml-[-12px] mr-[-12px] lg:pr-num-40 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-num-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
                <div className="self-stretch flex-1 flex items-start justify-center py-num-0 px-num-12 box-border w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-num-10 bg-white border-whitesmoke border-solid border-[1px] box-border flex flex-col items-start py-num-15 px-[13px] gap-[23px] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-num-100%!important sm:mb-5">
                    <img
                      className="self-stretch relative rounded-num-10 max-w-full overflow-hidden h-[200px] object-cover"
                      alt=""
                      src="/Matterhorn-Suites-Image@2x.png"
                    />
                    <div className="self-stretch flex items-start gap-[11px]">
                      <div className="flex flex-col items-start gap-1.5">
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-gray-100 text-left">
                          Entire bungalow
                        </div>
                        <b className="self-stretch relative text-num-22 tracking-num-0_04 capitalize font-roboto text-darkslategray-300 text-left sm:text-num-20">
                          Matterhorn Suites
                        </b>
                        <div className="self-stretch relative text-num-18 tracking-num-0_04 font-roboto text-darkslategray-300 text-left">
                          $575/night
                        </div>
                      </div>
                      <Video1 className="relative w-[25px] h-[25px] cursor-pointer" />
                    </div>
                    <div className="self-stretch relative h-num-19">
                      <div className="absolute top-[0px] left-[53.63px] text-num-16 tracking-num-0_04 font-roboto text-cornflowerblue-200 text-left inline-block w-[216.4px]">
                        (60 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.3px] h-num-19">
                        <div className="absolute top-[0px] left-[20.34px] text-num-16 tracking-num-0_04 font-medium font-roboto text-darkslategray-300 text-left">
                          4.9
                        </div>
                        <Vector6 className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full" />
                      </div>
                    </div>
                    <div className="self-stretch rounded-num-4 border-lavender border-solid border-[1px] box-border h-num-46 overflow-hidden flex flex-col items-center justify-center sm:w-num-100%!important">
                      <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex items-start justify-center py-num-0 px-num-12 box-border w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-num-10 bg-white flex flex-col items-start py-num-15 px-[13px] box-border gap-[23px] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-num-100%!important sm:mb-5">
                    <img
                      className="self-stretch relative rounded-num-10 max-w-full overflow-hidden h-[200px] object-cover"
                      alt=""
                      src="/Discovery-Shores-Image@2x.png"
                    />
                    <div className="self-stretch flex items-start">
                      <div className="flex flex-col items-start gap-1.5">
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-gray-100 text-left">
                          2-Story beachfront suite
                        </div>
                        <b className="self-stretch relative text-num-22 tracking-num-0_04 capitalize font-roboto text-darkslategray-300 text-left sm:text-num-20">
                          Discovery Shores
                        </b>
                        <div className="self-stretch relative text-num-18 tracking-num-0_04 font-roboto text-darkslategray-300 text-left">
                          $360/night
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative h-num-19">
                      <div className="absolute top-[0px] left-[53.63px] text-num-16 tracking-num-0_04 font-roboto text-cornflowerblue-200 text-left inline-block w-[216.4px]">
                        (116 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.3px] h-num-19">
                        <div className="absolute top-[0px] left-[20.34px] text-num-16 tracking-num-0_04 font-medium font-roboto text-darkslategray-300 text-left">
                          4.8
                        </div>
                        <Vector7 className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full" />
                      </div>
                    </div>
                    <div className="self-stretch rounded-num-4 border-lavender border-solid border-[1px] box-border h-num-46 overflow-hidden flex flex-col items-center justify-center sm:w-num-100%!important">
                      <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex items-start justify-center py-num-0 px-num-12 box-border w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-num-10 bg-white flex flex-col items-start py-num-15 px-[13px] box-border gap-[23px] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:flex sm:w-num-100%!important">
                    <img
                      className="self-stretch relative rounded-num-10 max-w-full overflow-hidden h-[200px] object-cover"
                      alt=""
                      src="/Arctic-Hut-Image@2x.png"
                    />
                    <div className="self-stretch flex items-start">
                      <div className="flex flex-col items-start gap-1.5">
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-gray-100 text-left">
                          Single deluxe hut
                        </div>
                        <b className="self-stretch relative text-num-22 tracking-num-0_04 capitalize font-roboto text-darkslategray-300 text-left">{`Arctic Hut `}</b>
                        <div className="self-stretch relative text-num-18 tracking-num-0_04 font-roboto text-darkslategray-300 text-left">
                          $420/night
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative h-num-19">
                      <div className="absolute top-[0px] left-[53.73px] text-num-16 tracking-num-0_04 font-roboto text-cornflowerblue-200 text-left inline-block w-[216.3px]">
                        (78 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.4px] h-num-19">
                        <div className="absolute top-[0px] left-[20.38px] text-num-16 tracking-num-0_04 font-medium font-roboto text-darkslategray-300 text-left">
                          4.7
                        </div>
                        <Vector8 className="absolute h-[90.53%] w-[37.61%] top-[0%] right-[62.39%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full" />
                      </div>
                    </div>
                    <div className="self-stretch rounded-num-4 border-lavender border-solid border-[1px] box-border h-num-46 overflow-hidden flex flex-col items-center justify-center sm:w-num-100%!important">
                      <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex items-start justify-center py-num-0 px-num-12 box-border w-3/12 md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-num-10 bg-white border-whitesmoke border-solid border-[1px] box-border flex flex-col items-start py-num-15 px-[13px] gap-[23px] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-num-100%!important">
                    <img
                      className="self-stretch relative rounded-num-10 max-w-full overflow-hidden h-[200px] object-cover"
                      alt=""
                      src="/Lake-Louise-Image@2x.png"
                    />
                    <div className="self-stretch flex items-start gap-[11px]">
                      <div className="flex flex-col items-start gap-1.5">
                        <div className="self-stretch relative text-num-16 tracking-num-0_02 font-roboto text-gray-100 text-left">
                          Deluxe King Room
                        </div>
                        <b className="self-stretch relative text-num-22 tracking-num-0_04 capitalize font-roboto text-darkslategray-300 text-left">
                          Lake Louise Inn
                        </b>
                        <div className="self-stretch relative text-num-18 tracking-num-0_04 font-roboto text-darkslategray-300 text-left">
                          $244/night
                        </div>
                      </div>
                      <Video2 className="relative w-[25px] h-[25px] cursor-pointer" />
                    </div>
                    <div className="self-stretch relative h-num-19">
                      <div className="absolute top-[0px] left-[53.63px] text-num-16 tracking-num-0_04 font-roboto text-cornflowerblue-200 text-left inline-block w-[216.4px]">
                        (63 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.3px] h-num-19">
                        <div className="absolute top-[0px] left-[20.34px] text-num-16 tracking-num-0_04 font-medium font-roboto text-darkslategray-300 text-left">
                          4.6
                        </div>
                        <Vector9 className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full" />
                      </div>
                    </div>
                    <div className="self-stretch rounded-num-4 border-lavender border-solid border-[1px] box-border h-num-46 overflow-hidden flex flex-col items-center justify-center sm:w-num-100%!important">
                      <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-num-31 bg-white hidden items-start gap-2.5 md:flex md:mt-4">
                <div className="relative text-num-18 tracking-num-0_04 font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.7px] shrink-0 md:w-auto">
                  View all stays
                </div>
                <Arrowright4 className="relative w-6 h-6" />
              </div>
            </form>
          </div>
          <div className="self-stretch flex flex-col items-start text-cornflowerblue-300">
            <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden">
              <img
                className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
                alt=""
                src="/Subscribe-section-background@2x.png"
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
                <Logo2 className="relative w-num-174 h-num-33" />
                <div className="self-stretch relative leading-num-27">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <SocialIcons11 className="relative w-[130px] h-[30px]" />
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
    </LocalizationProvider>
  );
};

export default Homepage;
