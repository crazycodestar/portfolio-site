import { Shell } from "@/components/ui/Shell";
import Socials from "./Socials";
import { RadialAnimation } from "@/components/RadialAnimation";

export default function CTA() {
	return (
		<Shell id="cta" className="mt-32">
			<div className="w-full h-[calc(100vh-20vh)]">
				<h1>I&apos;m job hunting rn</h1>
				<div className="flex w-full h-full items-center justify-center relative">
					<div className="absolute -z-10 top-0 left-0 w-full">
						<RadialAnimation />
					</div>
					<Socials />
				</div>
			</div>
		</Shell>
	);
}
