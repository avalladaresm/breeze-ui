import TextSkeleton from "../../../src/components/TextSkeleton";
import colors from "../../../src/utils/colors";

export default function PlaygroundTextSkeleton() {
  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">Text Skeleton</h1>
          <div className="flex space-x-3">
            <TextSkeleton
              lines={3}
              linesHeights={["xs", "lg"]}
              linesWidths={["md", "xs"]}
              linesColors={[colors.green.light, colors.fuchsia.dark]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
