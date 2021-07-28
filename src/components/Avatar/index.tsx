import { UserIcon } from "@heroicons/react/solid";
import * as CSS from "csstype";

import colors from "../../utils/colors";
import {
  BreezeAvatarSize,
  BreezeBorderRadius,
  BreezeColor,
  ConditionalProps
} from "../types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Avatar = ({
  size = "xl",
  icon = <UserIcon />,
  bgColor = colors.blue.light,
  iconColor = colors.blue.dark,
  roundedRadius = "full",
  placeholder = "icon",
  initials = undefined
}: AvatarProps) => {
  const _h = "h-avatar-" + size;
  const _w = "w-avatar-" + size;
  const _r = "rounded-" + roundedRadius;
  const _fs = "text-" + size;
  return (
    <div id="avatar">
      <span
        className={classNames(
          "inline-flex overflow-hidden items-center justify-center",
          _h,
          _w,
          _r
        )}
        style={
          {
            color: iconColor,
            backgroundColor: bgColor
          } as CSS.Properties
        }
      >
        {placeholder === "icon" ? (
          icon
        ) : placeholder === "initials" ? (
          <span className={classNames("text-white", _fs)}>
            {initials?.slice(0, 2)}
          </span>
        ) : (
          icon
        )}
      </span>
    </div>
  );
};

export default Avatar;

declare type AvatarProps = ConditionalProps<
  {
    size?: BreezeAvatarSize;
    icon?: JSX.Element;
    bgColor?: string | BreezeColor;
    iconColor?: string | BreezeColor;
    roundedRadius?: BreezeBorderRadius;
    placeholder?: "icon" | "initials";
    initials?: string | undefined;
  },
  "placeholder",
  {
    size?: BreezeAvatarSize;
    icon?: JSX.Element;
    bgColor?: string | BreezeColor;
    iconColor?: string | BreezeColor;
    roundedRadius?: BreezeBorderRadius;
    placeholder: "initials";
    initials: string;
  }
>;
