"use client";
import Image from "next/image";
import { sidebarProps } from "@/types/types";

export default function Sidebar({ navItems, selected, setSelected, navTitle }: sidebarProps) {
	return (
		<div className="w-auto py-3 ">
			<h2 className="text-base font-medium text-content-text mb-4">{navTitle}</h2>
			{/* <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent border-l-black"></div> */}
			{/* <div className="relative w-40 h-60 bg-gray-100">
				<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-24 h-48 bg-white rounded-l-full clip-triangle"></div>
			</div> */}

			<ul className="space-y-1.5">
				{navItems.map((item) => (
					<li
						key={item.title}
						onClick={() => setSelected(item.title)}
						className={`group w-[318px] h-[92px] p-4 rounded-[10px] cursor-pointer  relative flex items-start gap-x-3.5 
					   ${selected === item.title ? "bg-white" : "hover:bg-white"}`}
					>
						<div
							className={`absolute z-10 right-0 top-[11px] w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-white-100 border-b-[20px] border-b-transparent transform rotate-45 rounded-tr-sm 
          ${selected === item.title ? "block" : "hidden group-hover:block"}`}
						></div>
						<div
							className={`absolute z-[0] right-[-15px] top-[11px] w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-bg-dark border-b-[20px] border-b-transparent transform rotate-45 rounded-tr-sm 
          ${selected === item.title ? "block" : "hidden group-hover:block"}`}
						></div>

						<Image src={item.icon} alt="icon" width={45} height={45} />
						<div>
							<h3 className="font-semibold text-title text-base">{item.title}</h3>
							<p className="text-xs font-normal text-content-text">{item.desc}</p>
						</div>
					</li>
				))}
			</ul>
			{/* <div className="w-11  overflow-hidden inline-block">
				<div className=" h-16  bg-black rotate-45 transform origin-top-left"></div>
			</div> */}
		</div>
	);
}
