// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const navItems = [
// 	{ name: "In-store Payments", desc: "POS, UPI, EMI, Growth Suite for retail", icon: "/images/icon1.png" },
// 	{ name: "Online Payments", desc: "Payment gateway, payouts, affordability for online businesses", icon: "/images/icon1.png" },
// 	{ name: "Prepaid", desc: "Platform for gift cards, network cards and distribution", icon: "/images/icon2.png" },
// 	{ name: "APIs for DPI", desc: "Lending, payments and ID verification within your platform", icon: "/images/icon1.png" },
// 	{ name: "Credit Processing", desc: "Unified platform for seamless card issuance & processing", icon: "/images/icon1.png" },
// ];

// const contentItems = [
// 	{
// 		title: "Brand currency",
// 		items: [
// 			{ name: "Gift cards", desc: "India’s largest gift card solutions provider", icon: "/images/iconB.png" },
// 			{ name: "Brand Wallet", desc: "Store all brand currencies in one place.", icon: "/images/iconB.png" },
// 			{ name: "Refunds", desc: "Issue instant and secure brand refunds.", icon: "/images/icon2.png" },
// 		],
// 	},
// 	{
// 		title: "Network prepaid",
// 		items: [
// 			{ name: "NCMC/Transit cards", desc: "Launch NCMC with the best prepaid tech stack.", icon: "/images/icon2.png" },
// 			{ name: "Forex Prepaid Cards", desc: "Robust tech stack to launch forex card programs.", icon: "/images/icon2.png" },
// 			{ name: "Expense management", desc: "New-age solutions for smarter expense management.", icon: "/images/icon2.png" },
// 		],
// 	},
// 	{
// 		title: "Gift card distribution",
// 		items: [
// 			{ name: "Rewards Catalogue", desc: "India’s largest collection of gift card rewards.", icon: "/images/icon2.png" },
// 			{ name: "Distribution as a Service (DaaS)", desc: "India’s biggest gift card distribution network.", icon: "/images/icon2.png" },
// 			{ name: "Bulk Buying for Business", desc: "Personalized bulk gifting made simple and quick.", icon: "/images/icon2.png" },
// 		],
// 	},
// 	{
// 		title: "Engagement and loyalty",
// 		items: [
// 			{ name: "Employee R&R", desc: "Motivate teams with comprehensive reward options.", icon: "/images/icon2.png" },
// 			{ name: "Channel partner loyalty", desc: "Build loyalty with smart, compliant solutions.", icon: "/images/icon2.png" },
// 		],
// 	},

// 	{
// 		title: "",
// 		items: [
// 			{ name: "Customer Loyalty", desc: "Maximise CLTV with bespoke loyalty programs.", icon: "/images/icon2.png" },
// 			{ name: "Sales and Influencer incentives", desc: "Boost sales with tailored incentive solutions.", icon: "/images/icon2.png" },
// 		],
// 	},
// 	{
// 		title: "",
// 		items: [
// 			{ name: "Gift card marketplace", desc: "Launch a custom gift card store to boost revenue.", icon: "/images/icon2.png" },
// 			{ name: "Consumer Promotions", desc: "Launch engaging campaigns with speed and ease.", icon: "/images/icon2.png" },
// 		],
// 	},
// ];

// export default function Products() {
// 	const [selected, setSelected] = useState("Prepaid");

// 	return (
// 		<div className="flex  gap-1.5 w-full h-auto bg-bg-dark absolute px-10 py-5">
// 			{/* Sidebar */}
// 			<div className="w-1/4 px-6 py-3 ">
// 				<h2 className="text-base font-medium text-content-text mb-4 ">Products</h2>
// 				<ul className="space-y-1.5">
// 					{navItems.map((item) => (
// 						<li
// 							key={item.name}
// 							onClick={() => setSelected(item.name)}
// 							className={`h-[92px] p-4 rounded-[10px] cursor-pointer transition-all ${
// 								selected === item.name ? "bg-white border-white-100" : "hover:bg-white-100"
// 							} flex items-start gap-x-3.5`}
// 						>
// 							<Image src={item.icon} alt="icon" width={45} height={45} />
// 							<div>
// 								<h3 className="font-semibold text-title text-base">{item.name}</h3>
// 								<p className="text-xs font-normal text-content-text">{item.desc}</p>
// 							</div>
// 						</li>
// 					))}
// 				</ul>
// 			</div>

// 			{/* Content Section */}
// 			<div className="w-3/4 p-6 bg-white-100 rounded-[10px]">
// 				<div className="grid grid-cols-3 gap-6">
// 					{contentItems.map((category, index) => (
// 						<div key={index}>
// 							<h3 className="text-sm font-medium mb-4 text-content-text ">{category.title}</h3>
// 							<ul className="space-y-4">
// 								{category.items.map((item) => (
// 									<li key={item.name} className="flex gap-3 items-start min-h-16">
// 										<Image src={item.icon} alt="icon" width={40} height={40} />
// 										<div>
// 											<h4 className="font-semibold text-base text-title">{item.name}</h4>
// 											<p className="text-xs  text-content-text">{item.desc}</p>
// 										</div>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default function Products() {
	return <>hy</>;
}
