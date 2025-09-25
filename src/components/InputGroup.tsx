import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";

export type InputGroupType = {
  className?: string;
};

const InputGroup: FunctionComponent<InputGroupType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center p-num-5 sm:w-full sm:flex-[unset] sm:self-stretch ${className}`}
    >
      <Autocomplete
        className="self-stretch"
        size="medium"
        disablePortal
        options={[
          "Singapore (SIN)",
          "Sydney (SYD)",
          "Siem Reap (REP)",
          "Shanghai (PVG)Sanya (SYX)",
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
  );
};

export default InputGroup;
