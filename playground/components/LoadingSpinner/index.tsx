import LoadingSpinner from "../../../src/components/LoadingSpinner";
import colors from "../../../src/utils/colors";
export default function PlaygroundLoadingSpinner() {
  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">Loading Spinner</h1>
          <div className="flex space-x-3">
            <LoadingSpinner color={colors.emerald.base} size="xs" />
            <LoadingSpinner color={colors.yellow.base} size="sm" />
            <LoadingSpinner color={colors.fuchsia.base} size="md" />
            <LoadingSpinner color={colors.red.base} size="lg" />
            <LoadingSpinner color={colors.lime.base} size="xl" />
            <LoadingSpinner color="#1188bb" size="tw" twSpacing="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
