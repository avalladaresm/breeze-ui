import colors from "../../utils/colors";
import { BreezeTextSkeletonHeight, BreezeTextSkeletonWidth } from "../types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TextSkeleton = ({
  lines = 1,
  linesWidths = ["xl"],
  linesHeights = ["sm"],
  linesColors = [colors.blueGray.light]
}: TextSkeletonProps) => {
  const _lines = Array(lines).fill({});

  if (linesWidths.length > 1 && linesWidths.length !== lines) {
    console.warn(
      "The `linesWidth` array length mush match the number of `lines`!`"
    );
  }
  if (linesHeights.length > 1 && linesHeights.length !== lines) {
    console.warn(
      linesHeights.length !== lines &&
        "The `linesHeight` array length mush match the number of `lines`!`"
    );
  }
  if (linesColors.length > 1 && linesColors.length !== lines) {
    console.warn(
      linesColors.length !== lines &&
        "The `linesColors` array length mush match the number of `lines`!`"
    );
  }

  return (
    <div id="text-skeleton-wrapper" className="animate-pulse">
      {_lines.map((_, i) => (
        <div
          id={`text-skeleton-line${i}`}
          key={i}
          className={classNames(
            "m-1 rounded-sm",
            `w-skeletonw-${
              linesWidths.length === 1
                ? linesWidths[0]
                : linesWidths[i] ?? linesWidths[0]
            } h-skeletonh-${
              linesHeights.length === 1
                ? linesHeights[0]
                : linesHeights[i] ?? linesHeights[0]
            }`
          )}
          style={{
            backgroundColor:
              linesColors.length === 1
                ? linesColors[0]
                : linesColors[i] ?? linesColors[0]
          }}
        ></div>
      ))}
    </div>
  );
};

export default TextSkeleton;

interface TextSkeletonProps {
  lines?: number;
  linesWidths?: BreezeTextSkeletonWidth[];
  linesHeights?: BreezeTextSkeletonHeight[];
  linesColors?: string[];
}
