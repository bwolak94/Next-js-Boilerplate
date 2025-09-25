import { FunctionComponent } from "react";

export type PrimaryButtonType = {
  className?: string;
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  className = "",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-num-0 bg-[transparent] relative w-[220px] h-[72px] ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-num-6 bg-cornflowerblue-200" />
      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-num-18 tracking-num-0_04 font-medium font-roboto text-white text-center">
        Show more results
      </div>
    </button>
  );
};

export default PrimaryButton;
