import { FunctionComponent, useState } from "react";
import FlightCard from "./FlightCard";
import Turkish from "./svgs/Turkish";
import FlightIcon from "./svgs/FlightIcon";
import SIA from "./svgs/SIA";
import FlightIcon1 from "./svgs/FlightIcon1";
import Japan from "./svgs/Japan";
import ANA from "./svgs/ANA";
import Americanairlines from "./svgs/Americanairlines";
import Japan1 from "./svgs/Japan1";
import Americanairlines1 from "./svgs/Americanairlines1";
import PrimaryButton from "./PrimaryButton";

export type FlightCardsType = {
  className?: string;
};

const FlightCards: FunctionComponent<FlightCardsType> = ({
  className = "",
}) => {
  const [flightCardItems] = useState([
    {
      turkish: <Turkish />,
      turkishIconTransform: "",
      singaporeAirlines: "Turkish Airlines",
      singaporeAirlinesTextAlign: "left",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "11:35 PM",
      flightDurationWidth: "121px",
      flightIcon: <FlightIcon />,
      flightIconWidth: "88.51%",
      flightIconRight: "5.51%",
      flightIconLeft: "5.98%",
      h55MNonStop: "33H 10M, 1-stop",
      aM1: "4:45 PM",
      s730: "S$ 723",
    },
    {
      turkish: <SIA />,
      turkishIconTransform: "",
      singaporeAirlines: "Singapore Airlines",
      singaporeAirlinesTextAlign: "center",
      singaporeAirlinesDisplay: "inline-block",
      singaporeAirlinesWidth: "140px",
      aM: "8:45 PM",
      flightDurationWidth: "129px",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "83.02%",
      flightIconRight: "8.27%",
      flightIconLeft: "8.71%",
      h55MNonStop: "15H 10M, 2-stops",
      aM1: "7:55 PM",
      s730: "S$ 900",
    },
    {
      turkish: <Japan />,
      turkishIconTransform: "scale(0.8)",
      singaporeAirlines: "Japan Airlines",
      singaporeAirlinesTextAlign: "",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "8:20 PM",
      flightDurationWidth: "",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "",
      flightIconRight: "6.34%",
      flightIconLeft: "5.15%",
      h55MNonStop: "17H 30M, 1-stop",
      aM1: "9:50 PM",
      s730: "S$ 859",
    },
    {
      turkish: <ANA />,
      turkishIconTransform: "scale(0.8)",
      singaporeAirlines: "ANA",
      singaporeAirlinesTextAlign: "",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "6:35 PM",
      flightDurationWidth: "",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "",
      flightIconRight: "",
      flightIconLeft: "",
      h55MNonStop: "19H 15M, 1-stop",
      aM1: "9:50 PM",
      s730: "S$ 936",
    },
    {
      turkish: <Americanairlines />,
      turkishIconTransform: "",
      singaporeAirlines: "American Airlines",
      singaporeAirlinesTextAlign: "center",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "8:20 PM",
      flightDurationWidth: "",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "",
      flightIconRight: "",
      flightIconLeft: "",
      h55MNonStop: "17H 30M, 1-stop",
      aM1: "9:50 AM",
      s730: "S$ 939",
    },
    {
      turkish: <Turkish />,
      turkishIconTransform: "",
      singaporeAirlines: "Turkish Airlines",
      singaporeAirlinesTextAlign: "",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "11:35 PM",
      flightDurationWidth: "129px",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "83.02%",
      flightIconRight: "8.27%",
      flightIconLeft: "8.71%",
      h55MNonStop: "33H 10M, 2-stops",
      aM1: "4:45 PM",
      s730: "S$ 673",
    },
    {
      turkish: <Japan1 />,
      turkishIconTransform: "scale(0.8)",
      singaporeAirlines: "Japan Airlines",
      singaporeAirlinesTextAlign: "",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "10:25 PM",
      flightDurationWidth: "",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "",
      flightIconRight: "",
      flightIconLeft: "",
      h55MNonStop: "26H 45M, 1-stop",
      aM1: "9:10 AM",
      s730: "S$ 859",
    },
    {
      turkish: <Americanairlines1 />,
      turkishIconTransform: "",
      singaporeAirlines: "American Airlines",
      singaporeAirlinesTextAlign: "center",
      singaporeAirlinesDisplay: "",
      singaporeAirlinesWidth: "",
      aM: "10:25 PM",
      flightDurationWidth: "",
      flightIcon: <FlightIcon1 />,
      flightIconWidth: "",
      flightIconRight: "",
      flightIconLeft: "",
      h55MNonStop: "26H 45M, 1-stop",
      aM1: "9:10 AM",
      s730: "S$ 859",
    },
  ]);
  return (
    <div
      className={`flex flex-col items-start gap-[9px] text-left text-num-16 text-dimgray-200 font-roboto ${className}`}
    >
      {flightCardItems.map((item, index) => (
        <FlightCard
          key={index}
          turkish={item.turkish}
          turkishIconTransform={item.turkishIconTransform}
          singaporeAirlines={item.singaporeAirlines}
          singaporeAirlinesTextAlign={item.singaporeAirlinesTextAlign}
          singaporeAirlinesDisplay={item.singaporeAirlinesDisplay}
          singaporeAirlinesWidth={item.singaporeAirlinesWidth}
          aM={item.aM}
          flightDurationWidth={item.flightDurationWidth}
          flightIcon={item.flightIcon}
          flightIconWidth={item.flightIconWidth}
          flightIconRight={item.flightIconRight}
          flightIconLeft={item.flightIconLeft}
          h55MNonStop={item.h55MNonStop}
          aM1={item.aM1}
          s730={item.s730}
        />
      ))}
      <PrimaryButton />
    </div>
  );
};

export default FlightCards;
