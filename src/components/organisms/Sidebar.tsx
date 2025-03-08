"use client";
import Image from "next/image";
import { sidebarProps } from "@/types/types";

export default function Sidebar({ navItems, selected, setSelected, navTitle }: sidebarProps) {
	return (
		<div className="w-1/3 py-3 ">
			<h2 className="text-base font-medium text-content-text mb-4">{navTitle}</h2>
			<ul className="space-y-1.5">
				{navItems.map((item) => (
					<li
						key={item.title}
						onClick={() => setSelected(item.title)}
						className={`w-[100%] max-w-[318px] h-[92px] p-4 rounded-[10px] cursor-pointer transition-all ${
							selected === item.title ? "bg-white border-white-100" : "hover:bg-white-100"
						} flex items-start gap-x-3.5`}
					>
						<Image src={item.icon} alt="icon" width={45} height={45} />
						<div>
							<h3 className="font-semibold text-title text-base">{item.title}</h3>
							<p className="text-xs font-normal text-content-text">{item.desc}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
