import React from "react";
import clsx from "clsx";

import styles from "./AppButton.module.scss";

type AppButtonVariants = "default" | "orange";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: AppButtonVariants;
}

export const AppButton: React.FC<AppButtonProps> = ({
  className,
  children,
  variant = "default",
  ...props
}) => {
  const variantButton = {
    orange: styles.buttonOrange,
    default: null,
  };

  return (
    <button
      className={clsx(styles.button, variantButton[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
