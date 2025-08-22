import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={cn("flex h-11 w-full rounded-xl border border-white/15 bg-zinc-900/80 px-3 text-sm text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-400", className)}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";
