import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NavBarHeaderProps {
	children: ReactNode;
	className?: string;
}

export const NavBarHeader = ({ children, className }: NavBarHeaderProps) => {
	return <h3 className={cn(className)}>{children}</h3>;
};
