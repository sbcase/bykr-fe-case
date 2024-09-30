"use client";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  size = "md",
  variant = "primary",
  icon,
  customClasses,
}) => {
  const baseStyle = `py-3 px-6 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-75 flex flex-row items-center justify-center whitespace-nowrap`;
  const sizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg !px-8 !py-4",
    xl: "text-xl",
  }[size];

  const variantClass = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    outline: "border-2 border-light-brown text-light-brown",
    link: "text-light-brown",
    success: "bg-green-500 text-white hover:bg-green-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-700",
    info: "bg-teal-500 text-white hover:bg-teal-700",
    light: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    dark: "bg-gray-900 text-white hover:bg-gray-700",
  }[variant];

  const iconElement = icon ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={icon} alt="icon" className="w-5 h-5 mr-2" />
  ) : null;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${sizeClass} ${variantClass} ${customClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {iconElement}
      {label}
    </button>
  );
};

export default Button;
