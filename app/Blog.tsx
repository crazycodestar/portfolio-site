import { Post } from "@/components/Post";
import { Shell } from "@/components/ui/Shell";
import Link from "next/link";

export default function Blog() {
	const posts = [
		{
			title: "Next.js routing system is robust but incomplete",
			description:
				"The React Framework for the Web isn't quite complete yet. The routing system still has somethings it could do better.",
			link: "https://itslekan.hashnode.dev/nextjs-routing-system-is-robust-but-incomplete",
			image:
				"https://cdn.hashnode.com/res/hashnode/image/upload/v1694361006106/daaa0877-2936-4c4f-b53b-6b2bae3c2df0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		},
		{
			title: "Calling out anyone that still writes their frontend code",
			description:
				"Stop writing code - frontend - it's an absolute waste of time. Here are some solutions you should adopt instead. You're welcome.",
			link: "https://itslekan.hashnode.dev/calling-out-anyone-that-still-writes-their-frontend-code",
			image:
				"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/NzERTNpnaDw/upload/1b8f44ea81d724ee9bc0ea34dd263405.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		},
		{
			title: "How to clone a website",
			description:
				"Clone a website from the internet and get it to work with all the files needed to run it.",
			link: "https://itslekan.hashnode.dev/how-to-clone-a-website",
			image:
				"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/zAZYuch7deE/upload/afe492f401bd2301a94f24a3cec98e91.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		},
		{
			title: "Solid.js is a refreshing take on rendering",
			description:
				"Solid.js is a refreshing take on frontend frameworks. It learns from its predecessors and optimizes their shortcomings.",
			link: "https://itslekan.hashnode.dev/solidjs-is-a-refreshing-take-on-rendering",
			image:
				"https://cdn.hashnode.com/res/hashnode/image/upload/v1694612464256/5365b918-dedd-48db-af0a-941f47685b04.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		},
	];
	return (
		<Shell id="blog" className="mt-32">
			<div className="flex justify-between items-center mb-8 w-full">
				<h3>Blog</h3>
				<Link href="https://itslekan.hashnode.dev/" target="_blank">
					<p className="hover:text-primary">More</p>
				</Link>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{posts.map(({ description, title, link, image }, index) => (
					<Post
						key={index}
						description={description}
						title={title}
						image={image}
						link={link}
					/>
				))}
			</div>
		</Shell>
	);
}
