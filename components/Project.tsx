"use client";

import { Url } from "next/dist/shared/lib/router/router";
import { useEffect, useRef, useState } from "react";
import Typed from "react-typed";
import { Button } from "./ui/Button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
	image: StaticImageData;
	name: string;
	description: string;
	packages: string[];
	githubSrc?: string;
	liveSiteSrc: string;
	flipped?: boolean;
}

const Project = ({
	image,
	name,
	description,
	packages,
	githubSrc,
	liveSiteSrc,
	flipped = false,
}: ProjectProps) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setIsIntersecting(entry.isIntersecting);
		});
		if (ref.current) observer.observe(ref.current);
	}, [isIntersecting]);
	// TODO: maybe change to highlightjs
	const statics = `
<p><span class="text-code-primary">import </span><span class="text-code-secondary">&#123;</span> useState <span class="text-code-secondary">&#125;</span><span class="text-code-primary"> from</span> <span class="text-code-secondary">&ldquo;react&rdquo;</span>&#59;</p>
<p class="mb-4"><span class="text-code-primary">import </span><span class="text-code-secondary">&#123;</span> ${name} <span class="text-code-secondary">&#125;</span><span class="text-code-primary"> from</span> <span class="text-code-secondary">&ldquo;./projects&rdquo;</span>&#59;</p>
<p>
	<span class="text-code-primary">export default</span> 
	<span class="text-code-accent">function </span>
	<span class="text-code-name">Page</span>&#40;&#41; &#123; <br />
	<p class="ml-4 mb-4">
		<span class="text-code-accent">const</span> [details, 
		<span class="text-code-accent-muted">setDetails</span>] = 
		<span class="text-code-name">useState</span>(&#123;
		<p class="ml-8">
			description: 
			<span class="text-code-secondary">
				&ldquo;${description}&rdquo;
			</span>,
		</p>
		<p class="ml-8">
			packages: [
			<span class="space-x-2">
				${packages.map(
					(module, index) =>
						`<span key={${index}}>
						<span class="text-code-secondary">&ldquo;${module}&rdquo;</span>
					</span>`
				)}
			</span>
			]
		</p>
		<p class="ml-4">&#125;)</p>
	</p>
	<p class="ml-4">
		<span class="text-code-primary">return</span> 
		&lt;<span class="text-code-primary">${name}</span> &#123;
		<span class="text-code-primary">...</span>details&#125; /&gt;
	</p>&#125;
</p>`;
	return (
		<div
			data-flipped={flipped}
			className="w-full flex flex-wrap gap-4 min-h-[28rem] flex-col lg:flex-row data-[flipped=true]:lg:flex-row-reverse"
		>
			<div className="flex-1 h-full flex items-center justify-center">
				<Image
					src={image}
					alt="image"
					className="max-w-[500px] aspect-square object-contain"
				/>
			</div>
			<div className="rounded-md p-6 h-full flex-1 bg-foreground">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="46"
					height="10"
					viewBox="0 0 46 10"
					fill="none"
				>
					<circle cx="5" cy="5" r="5" fill="#3EE730" />
					<circle cx="23" cy="5" r="5" fill="#E78830" />
					<circle cx="41" cy="5" r="5" fill="#E73030" />
				</svg>
				<div className="mt-8" ref={ref}>
					{isIntersecting ? <Typed strings={[statics]} typeSpeed={5} /> : null}
				</div>
				<div className="mt-8 flex items-center gap-4">
					<Button className="gap-2">
						<Link href={liveSiteSrc} target="_blank">
							Live Site
						</Link>
					</Button>
					{githubSrc && (
						<Button variant="secondary" asChild className="gap-2">
							<Link href={githubSrc} target="_blank">
								<GitHubLogoIcon /> Github
							</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export { Project };
