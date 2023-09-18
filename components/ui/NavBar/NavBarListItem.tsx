"use client";

import { type ReactNode, useContext, useEffect, useState } from "react";
import { ActiveNavBarListItemContext } from "./NavBarList";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

interface NavBarListItemProps {
	children?: ReactNode;
	href?: string;
}

export const NavBarListItem = ({ children, href }: NavBarListItemProps) => {
	const router = useRouter();
	const { handleSetActiveListItem, listItemContext } = useContext(
		ActiveNavBarListItemContext
	);

	const [index] = useState(uuidv4());

	const handleActivateListItem = () => {
		index && handleSetActiveListItem(index);
		return href && router.push(href);
	};
	// TODO: active on index styling
	return (
		<li
			data-selected={index === listItemContext}
			onClick={handleActivateListItem}
			className="flex py-3 px-4 items-center gap-1 rounded-md data-[selected=true]:bg-secondary text-secondary-foreground cursor-pointer font-inconsolata"
		>
			{children}
		</li>
	);
};
