import LoadingSpinner from "../LoadingSpinner"
import { MutableRefObject } from "react"

interface ButtonProps {
  label?: string
  icon?: JSX.Element
  iconOnly?: boolean
  type: "button" | "submit" | "reset"
  disabled?: boolean
  priority?: "primary" | "secondary" | "ghost" | "icononly"
  isLoading?: boolean
  onClick?: () => void
  innerRef?: MutableRefObject<null>
  className?: string
}

const Button = ({
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
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      ref={innerRef}
      className={`${className} ${
        priority === "primary"
          ? "primary"
          : priority === "secondary"
          ? "secondary"
          : priority === "ghost"
          ? "ghost"
          : priority === "icononly"
          ? ""
          : priority
      } ${iconOnly && ""}`}
    >
      {isLoading && (
        <LoadingSpinner
          size={3}
          color={`${
            priority === "secondary" || priority === "ghost"
              ? "text-blue-500"
              : "text-white"
          }`}
        />
      )}
      {label}
      {icon}
    </button>
  )
}

export default Button
