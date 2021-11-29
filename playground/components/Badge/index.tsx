import Badge from "../../../src/components/Badge";
import colors from "../../../src/utils/colors";

export default function PlaygroundBadge() {
  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">Badge</h1>
          <div className="flex space-x-3">
            <Badge label="default" type="default" shadow="inner" />
            <Badge label="Success" type="success" shadow="xs" />
            <Badge label="danger" type="danger" shadow="sm" />
            <Badge label="warning" type="warning" shadow="md" />
            <Badge label="hello" shadow="lg" />
            <Badge
              label="hello"
              shadow="xl"
              //roundedRadius="none"
              roundedSides={["none"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
