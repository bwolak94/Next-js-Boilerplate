import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Vector1 from "./svgs/Vector1";

export type FlightCardType = {
  className?: string;
  turkish?: React.ReactNode;
  singaporeAirlines?: string;
  aM?: string;
  flightIcon?: React.ReactNode;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  turkishIconTransform?: CSSProperties["transform"];
  singaporeAirlinesTextAlign?: CSSProperties["textAlign"];
  singaporeAirlinesDisplay?: CSSProperties["display"];
  singaporeAirlinesWidth?: CSSProperties["width"];
  flightDurationWidth?: CSSProperties["width"];
  flightIconWidth?: CSSProperties["width"];
  flightIconRight?: CSSProperties["right"];
  flightIconLeft?: CSSProperties["left"];
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  className = "",
  turkish,
  turkishIconTransform,
  singaporeAirlines,
  singaporeAirlinesTextAlign,
  singaporeAirlinesDisplay,
  singaporeAirlinesWidth,
  aM,
  flightDurationWidth,
  flightIcon,
  flightIconWidth,
  flightIconRight,
  flightIconLeft,
  h55MNonStop,
  aM1,
  s730,
}) => {
  const turkishIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: turkishIconTransform,
    };
  }, [turkishIconTransform]);

  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: singaporeAirlinesTextAlign,
      display: singaporeAirlinesDisplay,
      width: singaporeAirlinesWidth,
    };
  }, [
    singaporeAirlinesTextAlign,
    singaporeAirlinesDisplay,
    singaporeAirlinesWidth,
  ]);

  const flightDurationStyle: CSSProperties = useMemo(() => {
    return {
      width: flightDurationWidth,
    };
  }, [flightDurationWidth]);

  const flightIconStyle: CSSProperties = useMemo(() => {
    return {
      width: flightIconWidth,
      right: flightIconRight,
      left: flightIconLeft,
    };
  }, [flightIconWidth, flightIconRight, flightIconLeft]);

  return (
    <div
      className={`self-stretch rounded-num-6 bg-white flex items-center justify-center py-num-0 px-num-25 gap-[50px] text-left text-num-16 text-dimgray-200 font-roboto sm:flex-col sm:py-num-20 sm:px-num-0 sm:box-border ${className}`}
    >
      <div className="w-1/5 flex items-center gap-[7px] md:flex-col sm:flex-row sm:w-num-100%!important sm:ml-10">
        {turkish}
        <div
          className="relative tracking-num-0_26"
          style={singaporeAirlinesStyle}
        >
          {singaporeAirlines}
        </div>
      </div>
      <div className="flex items-center justify-between gap-0 w-[64%] text-num-21 text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-num-0 sm:box-border sm:!!mr-[0pximportant] mq428small:w-[90%]">
        <div className="relative w-num-93 h-num-52 mq428small:w-20">
          <div className="absolute w-full top-[0%] left-[0%] tracking-num-0_32 font-medium inline-block mq428small:text-num-16">
            {aM}
          </div>
          <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-num-16 tracking-num-0_26 text-dimgray-100 inline-block mq428small:text-num-16">
            SIN
          </div>
        </div>
        <div
          className="relative w-num-121 h-num-55 text-center text-num-16 text-gray-100 sm:[transform:scale(0.9)]"
          style={flightDurationStyle}
        >
          {flightIcon}
          <div className="absolute top-[65.45%] left-[0%] tracking-num-0_21 mq428small:text-num-13">
            {h55MNonStop}
          </div>
        </div>
        <div className="relative w-num-91 h-num-52 text-right mq428small:w-20">
          <div className="absolute w-full top-[0%] left-[0%] tracking-num-0_32 font-medium inline-block mq428small:text-num-16">
            {aM1}
          </div>
          <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-num-16 tracking-num-0_26 text-dimgray-100 inline-block mq428small:text-num-16">
            LAX
          </div>
        </div>
      </div>
      <div className="w-32 flex items-center justify-center text-center text-num-24 text-orange-100">
        <Vector1 className="relative max-w-full overflow-hidden h-num-100 sm:hidden" />
        <b className="flex-1 relative tracking-num-0_34">{s730}</b>
      </div>
    </div>
  );
};

export default FlightCard;
