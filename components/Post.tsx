import Image from "next/image";
import Link from "next/link";

interface PostProps {
	image: string;
	title: string;
	description: string;
	link: string;
}

const Post = ({ image, title, description, link }: PostProps) => {
	return (
		<div className="w-full flex sm:flex-col p-4 gap-4 rounded-md border-border border-[1px] bg-foreground">
			<div className="flex-1 sm:flex-auto sm:w-full aspect-[3/2] rounded-md bg-foreground">
				<img className="w-full h-full object-cover" src={image} alt={title} />
			</div>
			<div className="flex-1 sm:flex-auto">
				<h5 className="truncate underline mb-2">
					<Link href={link} target="_blank">
						{title}
					</Link>
				</h5>
				<p>{description}</p>
			</div>
		</div>
	);
};

export { Post };
