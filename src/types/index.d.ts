interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: string;
  customClasses?: string;
}

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "link"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface HeaderProps {
  title: string;
  links?: {
    label: string;
    url: string;
    isButton?: boolean;
    buttonProps?: ButtonProps;
  }[];
}

interface CardProps {
  companyImage: {
    src: string;
    alt: string;
  };
  review: string;
  reviewAuthor: {
    name: string;
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
}
