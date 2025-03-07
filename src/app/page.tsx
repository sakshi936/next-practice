import Image from "next/image";
import SpeechBubbleCard from "@/components/pages/sample";
import Navbar from "@/components/pages/Navbar";
import { Logo } from "@/components/atoms/Logo";
import { Hero } from "@/components/pages/Hero";
export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			{/* <Logo /> */}
		</main>
	);
}
