import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShellProps {
	children: ReactNode;
	className?: string;
	id?: string;
}

const Shell = ({ children, className, id }: ShellProps) => {
	return (
		<section
			id={id}
			className={cn(
				"mx-4 md:mx-8 lg:mx-16 w-[calc(100vw-2.1rem)] md:w-[calc(100vw-4.1rem)] lg:w-[calc(100vw-8.1rem)]",
				className
			)}
		>
			{children}
		</section>
	);
};

export { Shell };
