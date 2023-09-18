"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, createContext, useState, useCallback } from "react";

interface NavBarMenuProps {
	children?: ReactNode;
	className?: string;
}

type ActiveNavBarListItemContext = string | null;

const ActiveNavBarListItemContextDefaults: {
	listItemContext: ActiveNavBarListItemContext;
	handleSetActiveListItem: (index: ActiveNavBarListItemContext) => void;
} = {
	listItemContext: null,
	handleSetActiveListItem(index) {},
};

export const ActiveNavBarListItemContext = createContext<{
	listItemContext: ActiveNavBarListItemContext;
	handleSetActiveListItem: (index: ActiveNavBarListItemContext) => void;
}>(ActiveNavBarListItemContextDefaults);

export const NavBarList = ({ children, className }: NavBarMenuProps) => {
	const [listItemContext, setListItemContext] =
		useState<ActiveNavBarListItemContext>(
			ActiveNavBarListItemContextDefaults.listItemContext
		);

	const handleSetActiveListItem = useCallback(
		(index: ActiveNavBarListItemContext) => {
			setListItemContext(index);
		},
		[]
	);

	return (
		<ul className={cn("list-none flex space-x-4 items-center", className)}>
			<ActiveNavBarListItemContext.Provider
				value={{
					listItemContext,
					handleSetActiveListItem,
				}}
			>
				{children}
			</ActiveNavBarListItemContext.Provider>
		</ul>
	);
};
