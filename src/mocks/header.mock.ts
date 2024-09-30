const headerData: HeaderProps = {
  title: "Collers",
  links: [
    {
      label: "Products",
      url: "#",
      isButton: false,
    },
    {
      label: "Solutions",
      url: "#",
      isButton: false,
    },
    {
      label: "Pricing",
      url: "#",
      isButton: false,
    },
    {
      label: "Resources",
      url: "#",
      isButton: false,
    },
    {
      label: "Log In",
      url: "#",
      isButton: false,
    },
    {
      label: "Sign Up Now",
      url: "#",
      isButton: true,
      buttonProps: {
        label: "Sign Up Now",
        size: "sm",
        variant: "outline",
      },
    },
  ],
};

export default headerData;
