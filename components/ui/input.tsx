import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-700 bg-[#1a1a1a] px-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]",
          className
        )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";
