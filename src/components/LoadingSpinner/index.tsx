import colors from "../../utils/colors";
import { BreezeSpacing, ConditionalProps } from "../types";

const LoadingSpinner = ({
  size = "sm",
  color = colors.blue.base,
  twSpacing = undefined
}: LoadingSpinnerProps) => {
  const h = "h-" + size;

  return (
    <div className="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-spin ${color} ${size === "tw" ? twSpacing : h}`}
        style={{ color: color }}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export default LoadingSpinner;

/**
 * @property {string} [color] - custom colors accessed when importing the `colors` utility
 * @property {BreezeSpacing} [size] - custom Breeze-UI spacing convention
 * @property {twSpacing} - Tailwind CSS spacing (width or height) class only when `size` property is set to `tw`
 */
declare type LoadingSpinnerProps = ConditionalProps<
  {
    color?: string;
    size?: BreezeSpacing | "tw";
    twSpacing?: string | undefined;
  },
  "size",
  {
    color?: string;
    size: "tw";
    twSpacing: string;
  }
>;
