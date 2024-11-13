import { twMerge } from "tailwind-merge"
import type { Size } from "../../lib/types"



const buttonSize = {
    default: "px-2 py-1",
    small: "px-1 py-1",
    large: "px-3 py-2"
}

const buttonVariance = {
    primary: "bg-pink-600 hover:bg-pink-900",
    secondary: "bg-stone-600 hover:bg-stone-900"
}

type ButtonProps = {
    size?: Size,
    variance?: "primary" | "secondary",
    className?: string,
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<"button">


export default function Button({ variance = "primary", size = "default", className, children, ...props }: ButtonProps) {
    return (
        <button className={twMerge(" rounded-sm font-bold", buttonVariance[variance], buttonSize[size], className)} {...props}>
            {children}
        </button>
    )
}
