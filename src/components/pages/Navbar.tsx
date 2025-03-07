import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { navItems } from "@/data/data";
import { ContactBtn } from "../atoms/ContactBtn";

export default function Navbar() {
	return (
		<>
			<nav className="hidden lg:flex justify-between items-center py-[11px] px-[60px]  bg-white-100 fixed top-0 left-0 w-full">
				<Logo />

				<ul className="flex gap-7 items-center cursor-pointer">
					{navItems.map((item, index) => (
						<li key={index} className="text-sm font-semibold text-content-text">
							{item.name}
						</li>
					))}
					<li>
						<ContactBtn />
					</li>
				</ul>
			</nav>
			<nav className="flex justify-between items-center lg:hidden px-3.5 py-4 fixed top-0 left-0 w-full bg-white-100">
				<Logo width={94} height={24} />
				<span className="w-4 font-extrabold text-title text-2xl">&#9776;</span>
			</nav>
		</>
	);
}
