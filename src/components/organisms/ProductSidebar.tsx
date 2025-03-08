"use client";
import Image from "next/image";
import { productSidebarProps } from "@/types/types";

export default function ProductSidebar({ navItems, selected, setSelected }: productSidebarProps) {
	return (
		<div className="w-1/4 px-6 py-3">
			<h2 className="text-base font-medium text-content-text mb-4">Products</h2>
			<ul className="space-y-1.5">
				{navItems.map((item) => (
					<li
						key={item.item}
						onClick={() => setSelected(item.item)}
						className={`h-[92px] p-4 rounded-[10px] cursor-pointer transition-all ${
							selected === item.item ? "bg-white border-white-100" : "hover:bg-white-100"
						} flex items-start gap-x-3.5`}
					>
						<Image src={item.icon} alt="icon" width={45} height={45} />
						<div>
							<h3 className="font-semibold text-title text-base">{item.item}</h3>
							<p className="text-xs font-normal text-content-text">{item.desc}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
