import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-wth-orange-400 via-wth-orange-500 to-wth-orange-600 text-white rounded-full shadow-glossy hover:shadow-glossy-hover hover:-translate-y-0.5 btn-glossy",
        outline: "border-2 border-wth-blue text-wth-blue rounded-full hover:bg-wth-blue/10 hover:border-wth-blue",
        ghost: "hover:bg-white/10 rounded-lg",
        nav: "text-white/80 hover:text-white font-medium",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        nav: "h-auto px-0 py-0 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
