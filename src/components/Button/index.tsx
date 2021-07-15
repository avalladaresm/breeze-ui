import LoadingSpinner from "../LoadingSpinner"
import { MutableRefObject } from "react"

interface ButtonProps {
  label?: string
  icon?: JSX.Element
  iconOnly?: boolean
  type: "button" | "submit" | "reset"
  disabled?: boolean
  priority?: "primary" | "secondary" | "white" | "icononly"
  isLoading?: boolean
  onClick?: () => void
  innerRef?: MutableRefObject<null>
  className?: string
}

const primaryButtonClass =
  "inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
const secondaryButtonClass =
  "inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-blue-800 bg-blue-100 hover:bg-blue-400 active:bg-blue-500 hover:text-white focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
const whiteButtonClass =
  "inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-200 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed"

export default function Button({
  label,
  icon,
  iconOnly = false,
  type,
  disabled = false,
  priority = "primary",
  isLoading = false,
  onClick = undefined,
  innerRef = undefined,
  className = ""
}: ButtonProps & HTMLButtonElement) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      ref={innerRef}
      className={`${className} ${
        priority === "primary"
          ? primaryButtonClass
          : priority === "secondary"
          ? secondaryButtonClass
          : priority === "white"
          ? whiteButtonClass
          : priority === "icononly"
          ? ""
          : priority
      } ${iconOnly && ""}`}
    >
      {isLoading && <LoadingSpinner size={3} color="text-white" />}
      {label}
      {icon}
    </button>
  )
}
