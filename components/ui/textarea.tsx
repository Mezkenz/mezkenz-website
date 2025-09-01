import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
        className={cn(
          "min-h-[120px] w-full rounded-md border border-gray-700 bg-[#1a1a1a] px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]",
          className
        )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
