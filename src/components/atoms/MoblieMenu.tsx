"use client";
import Image from "next/image";
import { mobileGridProps } from "@/types/types";
import { useState } from "react";
import { ContactBtn } from "./ContactBtn";

function MoblieMenu({ items, className }: mobileGridProps) {
	const [selectedPage, setSelectedPage] = useState("");
	const activeItem = items.find((item) => item.name === selectedPage);
	// console.log(activeItem);

	return (
		<>
			{selectedPage ? (
				activeItem && <activeItem.page />
			) : (
				<ul className={` ${className}`}>
					{items.map((item, index) => (
						<li key={index} className="flex items-center justify-between min-h-14 border-b border-bg-base py-4 cursor-pointer" onClick={() => setSelectedPage(item.name)}>
							<h3 className="font-semibold text-base text-title">{item.name}</h3>
							<Image src="/images/next.png" alt="next" width={40} height={40} />
						</li>
					))}
					<li className="mt-28 pb-5">
						<ContactBtn className="w-full" />
					</li>
				</ul>
			)}
		</>
	);
}

export default MoblieMenu;
