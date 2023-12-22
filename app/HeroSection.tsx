"use client";
import Image from "next/image";
import { Shell } from "@/components/ui/Shell";
import profile from "@/public/images/profile.jpg";
import { RadialAnimation } from "@/components/RadialAnimation";
import Socials from "./Socials";
import Typed from "react-typed";

export default function HeroSection() {
	return (
		<Shell className="flex mt-[15rem]">
			<div className="flex items-center gap-32 mx-auto flex-wrap justify-center">
				<div className="flex flex-col gap-8 max-w-[33rem] relative">
					<div className="absolute -z-10 -top-[16rem] -left-[11rem] w-full">
						<RadialAnimation />
					</div>
					<h1>
						FullStack Software <br />
						<span className="text-[#FFD600]">&lt;</span>
						<span className="text-[#5ED2F2]">Developer</span>
						<span className="text-[#FFD600]">/&gt;</span>
					</h1>
					<p>
						<Typed
							strings={[
								" Hi! I&apos;m a Fullstack Software Engineer skilled in creating seamless web and mobile applications. With a focus on both frontend finesse and backend robustness, I bring creative ideas to life through clean, efficient code.",
							]}
							typeSpeed={20}
						/>
					</p>
					<Socials />
					{/* <p>
						Finished in <span className="text-[#00FF19]">1.87ms</span>
					</p> */}
				</div>
				<div className="relative">
					<Image
						className="w-[15rem] h-[25rem] object-cover"
						src={profile}
						alt="profile"
					/>
					<div className="w-[15rem] h-[25rem] absolute -z-10 top-4 left-4 bg-primary" />
				</div>
			</div>
		</Shell>
	);
}
