"use client";
import { useState } from "react";
import { Logo } from "../atoms/Logo";
import { navItems } from "@/data/data";
import { ContactBtn } from "../atoms/ContactBtn";
import React from "react";

export default function Navbar() {
	// const [ActiveComponent, setActiveComponent] = useState<FC | null>(null);
	const [ActiveComponent, setActiveComponent] = useState(" ");

	const activeItem = navItems.find((item) => item.name === ActiveComponent);
	// console.log(activeItem);

	return (
		<>
			<nav className="hidden lg:flex justify-between items-center py-[11px] px-[60px]  bg-white fixed top-0 left-0 w-full z-10">
				<Logo />

				<ul className="flex gap-7 items-center cursor-pointer">
					{navItems.map((item, index) => (
						<li
							key={index}
							className={`text-sm font-semibold text-content-text transition-colors duration-300  ${ActiveComponent === item.name ? "text-title" : ""}`}
							onClick={() => setActiveComponent(item.name)}
							onMouseEnter={() => setActiveComponent(item.name)}
						>
							{item.name}
						</li>
					))}
					<li>
						<ContactBtn />
					</li>
				</ul>
			</nav>
			<div className=" absolute w-full top-[74px] z-0 ">
				{/* display selected or hovered navitem component */}
				{/* {ActiveComponent && <ActiveComponent />} */}
				{activeItem && <activeItem.page />}
			</div>
			<nav className="flex justify-between items-center lg:hidden px-3.5 py-4 fixed top-0 left-0 w-full bg-white-100">
				<Logo width={94} height={24} />
				<span className="w-4 font-extrabold text-title text-2xl">&#9776;</span>
			</nav>
		</>
	);
}
