import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon
} from "@heroicons/react/solid";
import { ResultTypes } from "../../../src/components/types";
import colors from "../../utils/colors";

const Result = ({
  title,
  description,
  type = "info",
  withBg = false,
  withBorder = false
}: ResultProps) => {
  return (
    <div
      id="result"
      className="rounded-lg"
      style={{
        backgroundColor: withBg
          ? type === "info"
            ? colors.blue.superLight
            : type === "success"
            ? colors.green.superLight
            : type === "warning"
            ? colors.amber.superLight
            : type === "danger"
            ? colors.red.superLight
            : colors.blue.light
          : "#fff",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: withBorder
          ? type === "info"
            ? colors.blue.light
            : type === "success"
            ? colors.green.light
            : type === "warning"
            ? colors.amber.light
            : type === "danger"
            ? colors.red.light
            : colors.blue.light
          : "#fff"
      }}
    >
      <div className="flex flex-col sm:flex-row justify-center my-5 px-5">
        <div id="resultIcon" className="mr-4 self-center">
          {type === "info" && (
            <InformationCircleIcon className="text-blue-500 w-28" />
          )}
          {type === "success" && (
            <CheckCircleIcon className="text-green-500 w-28" />
          )}
          {type === "warning" && (
            <ExclamationCircleIcon className="text-yellow-500 w-28" />
          )}
          {type === "danger" && <XCircleIcon className="text-red-500 w-28" />}
        </div>
        <div className={`${!description ? "flex items-center" : ""}`}>
          <h4
            id="resultTitle"
            className="text-lg leading-5 font-bold text-center break-all"
          >
            {title}
          </h4>
          <p
            id="resultDescription"
            className="mt-1 text-center leading-5 sm:text-left"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;

interface ResultProps {
  title: string;
  description?: string;
  type?: ResultTypes;
  withBg?: boolean;
  withBorder?: boolean;
}
