import type { ButtonHTMLAttributes, CSSProperties } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseStyle: CSSProperties = {
  padding: "8px 16px",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: { background: "#2563eb", color: "#fff" },
  secondary: { background: "#e5e7eb", color: "#111827" },
  danger: { background: "#dc2626", color: "#fff" },
};

export default function Button({ variant = "primary", style, ...props }: ButtonProps) {
  return <button {...props} style={{ ...baseStyle, ...variantStyles[variant], ...style }} />;
}
