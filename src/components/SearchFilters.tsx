import { FunctionComponent } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Vector2 from "./svgs/Vector2";
import Seperator from "./svgs/Seperator";

export type SearchFiltersType = {
  className?: string;
};

const SearchFilters: FunctionComponent<SearchFiltersType> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-[350.5px] h-[667px] text-left text-num-22 text-dimgray-200 font-roboto lg:hidden ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[311.5px] h-[47px] text-num-20">
        <div className="absolute top-[0px] left-[0px] tracking-num-0_26 inline-block w-[219.4px]">
          10 out of 177 Results
        </div>
        <Vector2 className="absolute top-[46.5px] left-[0px] max-h-full w-[311.5px]" />
      </div>
      <div className="absolute top-[231.4px] left-[0px] w-[221px] h-num-106">
        <b className="absolute top-[0px] left-[0px] tracking-num-0_26 inline-block w-[189px]">
          Booking Options
        </b>
        <FormControlLabel
          className="absolute top-[50px] left-[0px]"
          label="Book on Fickleflight"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[86px] left-[0px]"
          label="Official Airline Websites"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
      </div>
      <div className="absolute top-[376.6px] left-[0px] w-[310.8px] h-num-106">
        <b className="absolute top-[0px] left-[0px] tracking-num-0_26 inline-block w-[198px]">
          Flight Experience
        </b>
        <FormControlLabel
          className="absolute top-[50px] left-[0px]"
          label="No overnight flights"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[86px] left-[0px]"
          label="No long stop-overs"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
      </div>
      <div className="absolute top-[561px] left-[0px] w-[181px] h-num-106">
        <b className="absolute top-[0px] left-[0px] tracking-num-0_26 inline-block w-[87.8px]">
          Airlines
        </b>
        <FormControlLabel
          className="absolute top-[50px] left-[0px]"
          label="Singapore Airlines"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[86px] left-[0px]"
          label="Qatar Airways"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
      </div>
      <div className="absolute top-[86.2px] left-[0px] w-[296.6px] h-num-106">
        <b className="absolute top-[0px] left-[0px] tracking-num-0_26 inline-block w-[65.3px]">
          Stops
        </b>
        <FormControlLabel
          className="absolute top-[50px] left-[0px]"
          label="1 Stop"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[86px] left-[0px]"
          label="2 Stops"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
      </div>
      <Seperator className="absolute top-[521.3px] left-[0px] max-h-full w-[350.5px]" />
    </div>
  );
};

export default SearchFilters;
