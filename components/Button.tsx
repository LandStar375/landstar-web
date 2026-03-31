import { ButtonProps } from "@/types";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap transition-colors duration-200 min-w-[44px] min-h-[44px] px-5 py-3 text-base cursor-pointer w-full sm:w-auto";

const variantStyles = {
  primary: "bg-brand-700 text-white shadow-sm hover:bg-brand-800",
  secondary:
    "border-2 border-brand-700 bg-white text-brand-700 hover:bg-brand-50",
  vehiclePrimary: "bg-vehicle-700 text-white shadow-sm hover:bg-vehicle-800",
  vehicleSecondary:
    "border-2 border-vehicle-700 bg-white text-vehicle-700 hover:bg-vehicle-50",
};

export default function Button({
  href,
  variant = "primary",
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
