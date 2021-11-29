import PlaygroundAvatar from "../components/Avatar";
import PlaygroundBadge from "../components/Badge";
import PlaygroundButton from "../components/Button";
import PlaygroundLoadingSpinner from "../components/LoadingSpinner";
import PlaygroundRadioGroup from "../components/RadioGroup";
import PlaygroundResult from "../components/Result";
import PlaygroundSwitch from "../components/Switch";
import PlaygroundTextSkeleton from "../components/TextSkeleton";

function App() {
  return (
    <div className="flex h-full bg-purple-300 justify-center items-start">
      <div className="flex-col ">
        <PlaygroundRadioGroup />
        <PlaygroundSwitch />
        <PlaygroundResult />
        <PlaygroundAvatar />
        <PlaygroundTextSkeleton />
        <PlaygroundBadge />
        <PlaygroundLoadingSpinner />
        <PlaygroundButton />
      </div>
    </div>
  );
}

export default App;
