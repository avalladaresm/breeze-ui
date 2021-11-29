import { useState } from "react";
import Switch from "../../../src/components/Switch";
import colors from "../../../src/utils/colors";
export default function PlaygroundResult() {
  const [_enable, _setEnabled] = useState(false);
  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">Switch</h1>
          <div className="flex space-x-3">
            <Switch
              enabled={_enable}
              setEnabled={() => _setEnabled(!_enable)}
              label="switch long label"
              labelPosition="top"
              color={colors.fuchsia.base}
            />
            <Switch
              enabled={_enable}
              setEnabled={() => _setEnabled(!_enable)}
              label="switch long label"
              labelPosition="bottom"
            />
            <Switch
              enabled={_enable}
              setEnabled={() => _setEnabled(!_enable)}
              label="switch long label"
              labelPosition="right"
            />
            <Switch
              enabled={_enable}
              setEnabled={() => _setEnabled(!_enable)}
              label="switch long label"
              labelPosition="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
