import { useState } from "react";
import RadioGroup from "../../../src/components/RadioGroup";
import { OptionProps } from "../../../src/components/types";

const options = [
  {
    value: "Startup",
    label: "Startup"
  },
  {
    value: "Business",
    label: "Business"
  },
  {
    value: "Enterprise",
    label: "Enterprise"
  }
];

export default function PlaygroundResult() {
  const [_selected, _setSelected] = useState<OptionProps | undefined>();

  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">RadioGroup</h1>
          <div className="flex space-x-3">
            <RadioGroup
              options={options}
              selected={_selected}
              setSelected={_setSelected}
            />
            {JSON.stringify(_selected)}
          </div>
        </div>
      </div>
    </div>
  );
}
