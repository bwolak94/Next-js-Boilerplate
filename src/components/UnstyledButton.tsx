import { FunctionComponent } from "react";

export type UnstyledButtonType = {
  className?: string;
};

const UnstyledButton: FunctionComponent<UnstyledButtonType> = ({
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden flex flex-col items-start py-num-8 px-num-22 text-left text-num-15 text-white font-roboto ${className}`}
    >
      <div className="relative tracking-num-0_46 leading-num-26 uppercase font-medium">
        submit
      </div>
    </div>
  );
};

export default UnstyledButton;
