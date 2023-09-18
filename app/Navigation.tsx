import { Button } from "@/components/ui/Button";
import {
	NavBar,
	NavBarHeader,
	NavBarListItem,
	NavBarList,
} from "@/components/ui/NavBar";
import { Shell } from "@/components/ui/Shell";

export default function Navigation() {
	return (
		<Shell className="top-0 left-0 z-10 fixed">
			<NavBar>
				<NavBarHeader>Olalekan Adekanmbi</NavBarHeader>
				<NavBarList className="hidden md:flex">
					<NavBarListItem href="/#projects">Projects</NavBarListItem>
					<NavBarListItem href="/#blog">Blog</NavBarListItem>
					<NavBarListItem href="/#cta">CTA</NavBarListItem>
				</NavBarList>
				<Button className="ml-auto">View Resume</Button>
			</NavBar>
		</Shell>
	);
}
