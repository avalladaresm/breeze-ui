import { useState } from "react";
import Button from "../../../src/components/Button";

export default function PlaygroundButton() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl">Button</h1>
        <div className="flex space-x-3">
          <Button
            type="button"
            label="Aceptar"
            priority="primary"
            isLoading={true}
            onClick={() => setCounter(counter + 1)}
          />
          <Button
            type="button"
            label="Cancelar"
            priority="secondary"
            onClick={() => setCounter(counter + 1)}
          />
          <Button
            type="button"
            label="Cancelar"
            priority="ghost"
            isLoading={true}
            onClick={() => setCounter(counter + 1)}
          />
          <div>Clicked {counter} times</div>
        </div>
      </div>
    </div>
  );
}
