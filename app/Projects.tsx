import { Shell } from "@/components/ui/Shell";
import { Project } from "@/components/Project";
import frame2 from "@/public/images/Frame 2.png";
import frame3 from "@/public/images/Frame 3.png";
import frame4 from "@/public/images/Frame 4.png";

export default function Projects() {
	return (
		<Shell className="mt-[10rem]">
			<h3 id="project" className="mb-16">
				Projects
			</h3>
			<div className="w-full space-y-64">
				<Project
					image={frame4}
					name="Analyze"
					description="Empower your online store with our eCommerce SaaS platform. Boost sales and efficiency effortlessly."
					packages={[
						"Nextjs[App Dir]",
						"ShadcnUI",
						"PlanetScale",
						"Authjs",
						"Prisma",
						"Typescript",
						"Tailwind",
					]}
					githubSrc="https://github.com"
					liveSiteSrc="vercel.com"
				/>
				<Project
					image={frame2}
					flipped
					name="Analyze"
					description="long description"
					packages={[
						"Solidjs",
						"Firebase",
						"tiptap",
						"cypress",
						"Typescript",
						"Tailwind",
					]}
					githubSrc="github.com"
					liveSiteSrc="vercel.com"
				/>
				<Project
					image={frame3}
					name="Analyze"
					description="long description"
					packages={[
						"Nextjs[Page Dir]",
						"PlanetScale",
						"Authjs",
						"Prisma",
						"Typescript",
						"Tailwind",
					]}
					githubSrc="github.com"
					liveSiteSrc="vercel.com"
				/>
				{/* <Project
					flipped
					name="Analyze"
					description="long description"
					packages={["Nextjs"]}
					githubSrc="github.com"
					liveSiteSrc="vercel.com"
				/> */}
			</div>
		</Shell>
	);
}
