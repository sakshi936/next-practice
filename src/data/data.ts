import { navItemsType } from "@/types/types";
import { Blogs } from "@/components/pages/Blogs";
import { Developers } from "@/components/pages/Developers";
import { Partners } from "@/components/pages/Partners";
import { Solutions } from "@/components/pages/Solutions";
import Products from "@/components/pages/ProductsS";
import { InStorePaymentType } from "@/types/types";
import { PrepaidCategory } from "@/types/types";
import { productItemsType } from "@/types/types";
import Prepaid from "@/components/organisms/Prepaid";

export const navItems: navItemsType[] = [
	{ name: "Products", page: Products },
	{ name: "Solutions", page: Solutions },
	{ name: "Partners", page: Partners },
	{ name: "Developers", page: Developers },
	{ name: "Blogs", page: Blogs },
	// { name: "ContactBtn", page: ContactBtn },
];

export const productItems: productItemsType[] = [
	{ item: "In-store Payments", component: Partners, desc: "POS, UPI, EMI, Growth Suite for retail", icon: "/images/icon1.png" },
	{ item: "Online Payments", component: Solutions, desc: "Payment gateway, payouts, affordability for online businesses", icon: "/images/icon1.png" },
	{ item: "Prepaid", component: Prepaid, desc: "Platform for gift cards, network cards and distribution", icon: "/images/icon2.png" },
];

// In-store payment content

export const InStorePayment: InStorePaymentType = {
	features: [
		{ name: "Buy Now Pay Later", desc: "Drive business with credit partners.", icon: "/icons/icon.svg" },
		{ name: "UPI", desc: "Best-in-class UPI solutions from trusted partner.", icon: "/icons/icon.svg" },
		{ name: "DCC", desc: "Accept 100+ global currencies from travelers.", icon: "/icons/icon.svg" },
		{ name: "GrowthSuite", desc: "Unlock next-level growth with our suite.", icon: "/icons/icon.svg" },
		{ name: "VAS", desc: "Reliable settlements, customizations, and more.", icon: "/icons/icon.svg" },
		{ name: "PL One", desc: "Manage and grow your business in one place.", icon: "/icons/icon.svg" },
	],
	devices: [
		{ name: "Touch", image: "/devices/touch.png" },
		{ name: "Go", image: "/devices/go.png" },
		{ name: "Duo", image: "/devices/duo.png" },
		{ name: "Mini", image: "/devices/mini.png" },
		{ name: "Voice Pod", image: "/devices/voicepod.png" },
	],
};

// prepaid content
export const prepaid: PrepaidCategory[] = [
	{
		title: "Brand currency",
		items: [
			{ name: "Gift cards", desc: "India’s largest gift card solutions provider", icon: "/images/iconB.png" },
			{ name: "Brand Wallet", desc: "Store all brand currencies in one place.", icon: "/images/iconB.png" },
			{ name: "Refunds", desc: "Issue instant and secure brand refunds.", icon: "/images/icon2.png" },
		],
	},
	{
		title: "Network prepaid",
		items: [
			{ name: "NCMC/Transit cards", desc: "Launch NCMC with the best prepaid tech stack.", icon: "/images/icon2.png" },
			{ name: "Forex Prepaid Cards", desc: "Robust tech stack to launch forex card programs.", icon: "/images/icon2.png" },
			{ name: "Expense management", desc: "New-age solutions for smarter expense management.", icon: "/images/icon2.png" },
		],
	},
	{
		title: "Gift card distribution",
		items: [
			{ name: "Rewards Catalogue", desc: "India’s largest collection of gift card rewards.", icon: "/images/icon2.png" },
			{ name: "Distribution as a Service (DaaS)", desc: "India’s biggest gift card distribution network.", icon: "/images/icon2.png" },
			{ name: "Bulk Buying for Business", desc: "Personalized bulk gifting made simple and quick.", icon: "/images/icon2.png" },
		],
	},
	{
		title: "Engagement and loyalty",
		items: [
			{ name: "Employee R&R", desc: "Motivate teams with comprehensive reward options.", icon: "/images/icon2.png" },
			{ name: "Channel partner loyalty", desc: "Build loyalty with smart, compliant solutions.", icon: "/images/icon2.png" },
		],
	},

	{
		title: "",
		items: [
			{ name: "Customer Loyalty", desc: "Maximise CLTV with bespoke loyalty programs.", icon: "/images/icon2.png" },
			{ name: "Sales and Influencer incentives", desc: "Boost sales with tailored incentive solutions.", icon: "/images/icon2.png" },
		],
	},
	{
		title: "",
		items: [
			{ name: "Gift card marketplace", desc: "Launch a custom gift card store to boost revenue.", icon: "/images/icon2.png" },
			{ name: "Consumer Promotions", desc: "Launch engaging campaigns with speed and ease.", icon: "/images/icon2.png" },
		],
	},
];
