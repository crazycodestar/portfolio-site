import Blog from "./Blog";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Projects from "./Projects";
import CTA from "./CTA";

export default function Home() {
	return (
		<main>
			<Navigation />
			<HeroSection />
			<Projects />
			<Blog />
			<CTA />
		</main>
	);
}
