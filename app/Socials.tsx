import {
	LinkedInLogoIcon,
	TwitterLogoIcon,
	GitHubLogoIcon,
	EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Socials() {
	return (
		<div className="text-secondary-foreground flex gap-4">
			<Link href="https://github.com/crazycodestar" target="_blank">
				<GitHubLogoIcon className="w-6 h-6 hover:text-primary" />
			</Link>
			<Link
				href="https://www.linkedin.com/in/olalekan-adekanmbi-a8623a246/"
				target="_blank"
			>
				<LinkedInLogoIcon className="w-6 h-6 hover:text-primary" />
			</Link>
			<Link href="https://twitter.com/_itslekan" target="_blank">
				<TwitterLogoIcon className="w-6 h-6 hover:text-primary" />
			</Link>
			{/*     TODO: setup email later   */}
			{/* <Link href="https://github.com/crazycodestar">
				<EnvelopeClosedIcon className="w-6 h-6 hover:text-primary" />
			</Link> */}
		</div>
	);
}
