// components/ui/CustomToast.jsx
import { Toaster } from "sonner";

export function CustomToast() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        style: {
          background: "var(--color-surface-container-low)",
          color: "var(--color-on-surface)",
          border: "1px solid var(--color-outline-variant)",
          borderRadius: "12px",
          padding: "12px 16px",
        },
        className: "font-body-md",
      }}
    />
  );
}
