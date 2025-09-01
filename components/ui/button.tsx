import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea44f] disabled:pointer-events-none disabled:opacity-50 px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-[#2ea44f] hover:bg-[#2c974b] text-white",
        outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900",
      }
    },
    defaultVariants: { variant: "default" }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { asChild?: boolean }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant }), className)} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
