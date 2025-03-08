import Image from "next/image";
import SpeechBubbleCard from "@/components/pages/sample";
import Navbar from "@/components/molecules/Navbar";
import { Logo } from "@/components/atoms/Logo";
import { Hero } from "@/components/pages/Hero";
// import Products from "@/components/pages/ProductsS";
import Products from "@/components/tamplate/Products";
export default function Home() {
	return (
		<main>
			{/* <Navbar /> */}
			<Hero />
			{/* <Products /> */}
			{/* <Products /> */}
		</main>
	);
}
