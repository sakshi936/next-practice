"use client";
import { useState } from "react";
import { Logo } from "../atoms/Logo";
import { navItems } from "@/data/data";
import { ContactBtn } from "../atoms/ContactBtn";
import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
	const [ActiveComponent, setActiveComponent] = useState("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const activeItem = navItems.find((item) => item.name === ActiveComponent);
	console.log(activeItem);

	function handleClose() {
		if (isOpen || ActiveComponent) {
			setIsOpen(false);
			setActiveComponent("");
		} else setIsOpen(true);
	}

	return (
		<>
			<nav className="hidden lg:flex justify-between items-center py-[11px] px-[60px]  bg-white fixed top-0 left-0 w-full z-10">
				<Logo />

				<ul className="flex gap-7 items-center cursor-pointer">
					{navItems.map((item, index) => (
						<li
							key={index}
							className={`text-sm font-semibold text-content-text transition-colors duration-300  ${ActiveComponent === item.name ? "text-title" : ""}`}
							onClick={() => {
								setActiveComponent(item.name);
								setIsOpen(true);
							}}
							onMouseEnter={() => {
								setActiveComponent(item.name);
								setIsOpen(true);
							}}
						>
							{item.name}
						</li>
					))}
					<li>
						<ContactBtn />
					</li>
				</ul>
			</nav>
			<div className="hidden lg:block absolute w-full top-[74px] z-0 ">{activeItem && <activeItem.page />}</div>
			{/* Moblie Nav */}
			<nav className="flex justify-between items-center lg:hidden px-4 py-4 fixed top-0 left-0 w-full bg-white z-10">
				<Logo width={94} height={24} />
				<span className="w-4 font-extrabold text-title text-2xl" onClick={() => handleClose()}>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</span>
			</nav>

			{/* Mobile Menu */}
			<div className={`lg:hidden absolute w-full top-[56px] z-0 bg-white h-full transition-all duration-300 ${isOpen ? "block" : "hidden"} p-4 h-auto`}>
				{/* <MoblieMenu items={navItems} /> */}
				{ActiveComponent ? (
					activeItem && <activeItem.page />
				) : (
					<div>
						<ul className={` bg-white`}>
							{navItems.map((item, index) => (
								<li
									key={index}
									className="flex items-center justify-between min-h-14 border-b border-bg-base py-4 cursor-pointer"
									onClick={() => {
										setActiveComponent(item.name);
										setIsOpen(true);
									}}
								>
									<h3 className="font-semibold text-base text-title">{item.name}</h3>
									<Image src="/images/next.png" alt="next" width={40} height={40} />
								</li>
							))}
							<li className="absolute w-full left-0 px-4 bottom-14">
								<ContactBtn className="w-full" />
							</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
}
