import * as React from "react";
import InputMask from "react-input-mask";

import { cn } from "@/lib/utils";

const MASK_TYPE = {
  phone: "+5\\5 99 99999-9999",
} as const;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: keyof typeof MASK_TYPE;
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, ...props }, ref) => {
    return (
      <InputMask
        type={type}
        mask={MASK_TYPE[mask]}
        maskChar=" "
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        inputRef={ref}
        {...props}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

export { CustomInput };
