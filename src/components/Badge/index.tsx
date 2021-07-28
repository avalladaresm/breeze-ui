import { getRoundedTWClasses } from "../../utils";
import {
  BreezeShadow,
  ClassName,
  BreezeRoundedSides,
  BreezeBorderRadius
} from "../types";

const Badge = ({
  label = "",
  type = "default",
  textColor,
  bgColor,
  shadow,
  roundedRadius = "xl",
  roundedSides = ["allCorners"]
}: BadgeProps) => {
  const colors = {
    default: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-300 text-amber-800",
    danger: "bg-red-100 text-red-800"
  };
  const _shadow = "shadow-" + shadow;
  const _rounded = getRoundedTWClasses(roundedSides, roundedRadius);

  return (
    <span
      id="badge"
      className={`badge ${colors[type]} ${_shadow} ${_rounded.join(" ")}`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {label}
    </span>
  );
};

export default Badge;

interface BadgeProps extends ClassName {
  label: string;
  type?: BadgeType;
  textColor?: string;
  bgColor?: string;
  shadow?: BreezeShadow;
  roundedRadius?: BreezeBorderRadius;
  roundedSides?: BreezeRoundedSides[];
}

type BadgeType = "default" | "success" | "warning" | "danger";
