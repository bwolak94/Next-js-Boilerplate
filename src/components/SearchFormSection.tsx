import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputGroup from "./InputGroup";

export type SearchFormSectionType = {
  className?: string;
};

const SearchFormSection: FunctionComponent<SearchFormSectionType> = ({
  className = "",
}) => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start text-left text-[61px] text-white font-baloo-bhai ${className}`}
      >
        <div className="self-stretch relative h-[362px] sm:h-[480px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
          <img
            className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/Banner-Background@2x.png"
          />
          <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col items-center justify-center py-num-0 px-num-80 box-border gap-5 md:pl-num-30 md:pr-num-30 md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
            <div className="self-stretch flex flex-col items-center">
              <div className="self-stretch relative leading-[67px] md:text-[42px] md:leading-[48px] sm:text-[31px] sm:leading-10">
                Where are you off too?
              </div>
            </div>
            <div className="self-stretch rounded-num-10 bg-white flex items-start p-num-20 md:flex-col">
              <div className="flex items-start md:w-full sm:flex-col">
                <InputGroup />
                <InputGroup />
                <div className="flex-1 flex flex-col items-center justify-center p-num-5 sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch">
                    <DatePicker
                      label="Date"
                      value={dateFieldDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setDateFieldDateTimePickerValue(newValue);
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
                <button className="cursor-pointer [border:none] p-num-0 bg-orange-200 rounded-num-4 w-num-164 h-14 overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-num-100%!important">
                  <div className="relative text-num-15 tracking-num-0_46 leading-num-26 uppercase font-medium font-roboto text-white text-center inline-block w-[147px]">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormSection;
