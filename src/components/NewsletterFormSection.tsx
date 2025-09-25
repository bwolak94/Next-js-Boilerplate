import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import UnstyledButton from "./UnstyledButton";

export type NewsletterFormSectionType = {
  className?: string;
};

const NewsletterFormSection: FunctionComponent<NewsletterFormSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch relative bg-aliceblue h-[529px] overflow-hidden text-center text-num-18 text-cornflowerblue-300 font-roboto ${className}`}
    >
      <img
        className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
        alt=""
        src="/Newsletter-Section-Background@2x.png"
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
            <UnstyledButton />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFormSection;
