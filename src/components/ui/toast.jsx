import { Toaster } from "sonner";

export const MYTost = () => {
  return Toaster.create({
    position: "top-right",
    duration: 5000,
    richColors: true,
  });
};
