import { Shell } from "@/components/ui/Shell";
import { Project } from "@/components/Project";
import frame2 from "@/public/images/Frame 2.png";
// import frame3 from "@/public/images/Frame 3.png";
import frame4 from "@/public/images/Frame 4.png";
import frame5 from "@/public/images/Frame 5.png";
import frame6 from "@/public/images/Frame 6.png";

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
					githubSrc="https://github.com/crazycodestar/instagram-checkout"
					liveSiteSrc="https://instagram-checkout-sz7c.vercel.app/"
				/>
				<Project
					image={frame6}
					flipped
					name="CameraCop"
					description=" Elevate your photography experience with our handpicked selection of cutting-edge cameras. Whether you're a professional photographer or an amateur enthusiast, we have the perfect camera to help you capture life's most precious moments with precision and style."
					packages={["AstroJs", "Analyze(My project as CMS)"]}
					liveSiteSrc="https://astro-storefront.vercel.app/"
					githubSrc="https://github.com/crazycodestar/astro-storefront"
				/>
				<Project
					image={frame2}
					name="Noteer"
					description="Effortlessly organize your ideas with our intuitive web app for seamless note-taking anytime, anywhere."
					packages={[
						"Solidjs",
						"Firebase",
						"tiptap",
						"cypress",
						"Typescript",
						"Tailwind",
					]}
					githubSrc="https://github.com/crazycodestar/solid-noter"
					liveSiteSrc="https://solid-noter.vercel.app/"
				/>
				{/* <Project
					image={frame3}
					name="Analyze"
					description="Connect with classmates, share insights, and stay updated on campus life with our student-centric social platform – your academic Twitter."
					packages={[
						"Nextjs[Page Dir]",
						"PlanetScale",
						"Authjs",
						"Prisma",
						"Typescript",
						"Tailwind",
					]}
					githubSrc="https://github.com/crazycodestar/studyhub"
					liveSiteSrc="https://studyhub-eta.vercel.app/"
				/> */}
				<Project
					image={frame5}
					name="DriveMaps"
					flipped
					description="Discover Boundless Adventures with Friends. Our Platform Connects Your Journey, Lets You Stay Close, and Easily Track Locations. Your Travel, Your Tribe, Our Seamless Experience."
					packages={["Reactjs", "Google Maps", "ShadcnUI"]}
					liveSiteSrc="https://ogun-maps-ukv3.vercel.app/"
					// githubSrc="github.com"
				/>
			</div>
		</Shell>
	);
}
