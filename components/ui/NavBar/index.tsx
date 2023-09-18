import { cn } from "@/lib/utils";
import { NavBarHeader } from "./NavBarHeader";
import { NavBarList } from "./NavBarList";
import { NavBarListItem } from "./NavBarListItem";
import { ReactNode } from "react";

interface NavBarProps {
	children: ReactNode;
	className?: string;
}

const NavBar = ({ children, className }: NavBarProps) => {
	return (
		<nav
			className={cn(
				"flex w-full mt-12 h-[5.25rem] px-6 items-center rounded-md bg-foreground gap-4",
				className
			)}
		>
			{children}
		</nav>
	);
};

export { NavBar, NavBarHeader, NavBarList, NavBarListItem };
