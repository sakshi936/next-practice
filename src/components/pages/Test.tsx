import { useState } from "react";
import { X } from "lucide-react"; // Close icon
import Link from "next/link";
import { ContactBtn } from "../atoms/ContactBtn";
import MoblieMenu from "../molecules/MoblieMenu";
import { navItems } from "@/data/data";

const Test = () => {
	const menuItems = ["Products", "Solutions", "Partners", "Developers", "Blogs"];
	const isOpen = true;
	return (
		<div
			className={`fixed top-0 left-0 w-[80%] md:w-[300px] h-full bg-white shadow-lg z-50 transform
		 ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 p-4`}
		>
			{/* Header */}
			{/* <div className="flex justify-between items-center p-4 border-b">
				<h1 className="text-lg font-semibold">pine labs</h1>
				<button onClick={toggleSidebar}>
					<X size={24} />
				</button>
			</div> */}

			{/* Navigation Menu */}
			{/* <ul className="mt-4 space-y-2">
				{menuItems.map((item, index) => (
					<li key={index} className="flex justify-between items-center px-6 py-4 text-lg font-semibold cursor-pointer hover:bg-gray-100 transition">
						<Link href={`/${item.toLowerCase()}`}>{item}</Link>
						<span>➝</span>
					</li>
				))}
			</ul> */}
			{/* <MoblieMenu items={menuItems} /> */}

			{/* Contact Button */}
			<ContactBtn className="w-[100%]" />
		</div>
	);
};

export default Test;
