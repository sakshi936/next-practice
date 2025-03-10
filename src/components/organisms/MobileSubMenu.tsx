"use client";
import Image from "next/image";
import { mobileSubMenuProps } from "@/types/types";
import { useState } from "react";

function MoblieSubMenu({ items, className, category }: mobileSubMenuProps) {
	const [selectedPage, setSelectedPage] = useState("");
	const activeItem = items.find((item) => item.title === selectedPage);
	// console.log(activeItem);

	return (
		<>
			{selectedPage ? (
				activeItem && <activeItem.component />
			) : (
				<div className="bg-white">
					<div className="flex items-end mb-2.5">
						<Image src="/images/chevron-right.png" alt="next" width={20} height={20} className=" rotate-180" />
						<h2 className="text-sm font-medium text-title ">{category}</h2>
					</div>
					<ul className={` ${className}`}>
						{items.map((item, index) => (
							<li key={index} className="flex items-center justify-between min-h-14 border-b border-bg-base py-4 cursor-pointer" onClick={() => setSelectedPage(item.title)}>
								<div className="flex items-center gap-1.5">
									<Image src={item.icon} alt="icon" width={45} height={45} />
									<h3 className="font-semibold text-base text-title">{item.title}</h3>
								</div>
								<Image src="/images/next.png" alt="next" width={40} height={40} />
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export default MoblieSubMenu;
