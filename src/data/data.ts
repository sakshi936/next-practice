import Blogs from "@/components/organisms/blogs/Blogs";
import Developers from "@/components/organisms/developers/Developers";
import Partners from "@/components/organisms/partnersn/Partners";
import Solutions from "@/components/tamplate/Solutions";
import Products from "@/components/tamplate/Products";
import Prepaid from "@/components/organisms/products/Prepaid";
import InStorePayments from "@/components/organisms/products/InStorePayments";
import OnlinePayments from "@/components/organisms/products/OnlinePayments";
import Api from "@/components/organisms/products/Api";
import CreditProcessing from "@/components/organisms/products/CreditProcessing";
import ByBusiness from "@/components/organisms/solutions/ByBusiness";
import ByIndustry from "@/components/organisms/solutions/ByIndustry";
import ByUseCase from "@/components/organisms/solutions/ByUseCase";

export const navItems = [
	{ name: "Products", page: Products },
	{ name: "Solutions", page: Solutions },
	{ name: "Partners", page: Partners },
	{ name: "Developers", page: Developers },
	{ name: "Blogs", page: Blogs },
];

export const productItems = [
	{ title: "In-store Payments", component: InStorePayments, desc: "POS, UPI, EMI, Growth Suite for retail", icon: "/images/icon1.png" },
	{ title: "Online Payments", component: OnlinePayments, desc: "Payment gateway, payouts, affordability for online businesses", icon: "/images/icon1.png" },
	{ title: "Prepaid", component: Prepaid, desc: "Platform for gift cards, network cards and distribution", icon: "/images/icon2.png" },
	{ title: "APIs for DPI", component: Api, desc: "Lending, payments and ID verification within your platform", icon: "/images/icon1.png" },
	{ title: "Credit Processing", component: CreditProcessing, desc: "Unified platform for seamless card issuance & processing", icon: "/images/icon1.png" },
];

// solutions sidebar items
export const solutionsItems = [
	{
		icon: "/images/icon1.png",
		title: "By Business Type",
		desc: "Get access to diverse tools to help grow your business.",
		component: ByBusiness,
	},
	{
		icon: "/images/icon1.png",
		title: "By Industry",
		desc: "Get access to diverse tools to help grow your business.",
		component: ByIndustry,
	},
	{
		icon: "/images/icon1.png",
		title: "By Use case",
		desc: "Get access to diverse tools to help grow your business.",
		component: ByUseCase,
	},
];

// In-store payment content

export const InStorePayment = {
	features: [
		{ title: "Buy Now Pay Later", desc: "Drive business with credit partners.", icon: "/images/icon1.png" },
		{ title: "UPI", desc: "Best-in-class UPI solutions from trusted partner.", icon: "/images/icon2.png" },
		{ title: "DCC", desc: "Accept 100+ global currencies from travelers.", icon: "/images/iconB.png" },
		{ title: "GrowthSuite", desc: "Unlock next-level growth with our suite.", icon: "/images/iconB.png" },
		{ title: "VAS", desc: "Reliable settlements, customizations, and more.", icon: "/images/iconB.png" },
		{ title: "PL One", desc: "Manage and grow your business in one place.", icon: "/images/iconB.png" },
	],
	devices: [
		{ title: "Touch", image: "/devices/Touch.png" },
		{ title: "Go", image: "/devices/Go.png" },
		{ title: "Duo", image: "/devices/Duo.png" },
		{ title: "Mini", image: "/devices/Mini.png" },
		{ title: "Voice Pod", image: "/devices/Voice_pod.png" },
	],
};

// prepaid content
export const prepaid = [
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

//Online Playments
export const onlinePayment = [
	{ icon: "/images/icon1.png", title: "Payment Gateway", desc: "Accept and manage online payments." },
	{ icon: "/images/icon1.png", title: "Buy Now Pay Later", desc: "Offer EMIs, discounts, cashbacks online." },
	{ icon: "/images/icon1.png", title: "Payment links", desc: "Collect payments on email, WhatsApp, SMS." },
	{ icon: "/images/icon1.png", title: "Payouts", desc: "Disburse individual and bulk payouts instantly." },
	{ icon: "/images/icon1.png", title: "Cross border", desc: "Accept international payments easily." },
	{ icon: "/images/icon1.png", title: "UPIVerse", desc: "The universe of all UPI offerings." },
	{ icon: "/images/icon1.png", title: "Tokeniser", desc: "Passkeys, fast authorization & tokenization." },
	{ icon: "/images/icon1.png", title: "Subscriptions", desc: "Collect recurring payments with ease." },
	{ icon: "/images/icon1.png", title: "Shopify", desc: "Payment gateway for your Shopify store." },
	{ icon: "/images/icon1.png", title: "Fee Collect", desc: "Dashboard to collect and manage fees." },
	{ icon: "/images/icon1.png", title: "Payment pages", desc: "Customizable payment pages for businesses." },
	{ icon: "/images/icon1.png", title: "Payment Mandates", desc: "Smart mandate management for recurring payments." },
	{ icon: "/images/icon1.png", title: "UPI Collections", desc: "Enable UPI payments across every touchpoint." },
];

// Api's for DPI
export const apiDpi = [
	{ title: "Embedded Bill Payments", desc: "Turn bill payments into revenue streams.", icon: "/images/icon1.png" },
	{ title: "Identity as a Service", desc: "Power secure onboarding with instant verifications.", icon: "/images/icon1.png" },
	{ title: "Embedded Digital Journeys", desc: "Complete digital stack for modern onboarding.", icon: "/images/icon1.png" },
	{ title: "AA Gateway", desc: "Complete FIP coverage through multi-AA network.", icon: "/images/icon1.png" },
	{ title: "Underwriting and collections", desc: "Make credit decisions without any guesswork.", icon: "/images/icon1.png" },
	{ title: "Personal Finance Management", desc: "Drive profitable customer engagements at scale.", icon: "/images/icon1.png" },
];

//Credit Processing
export const creditProcessing = [
	{
		section: "Issuer Processing",
		features: [
			{ icon: "/images/icon1.png", title: "Card Management System", desc: "Manage card lifecycle for all card types." },
			{ icon: "/images/icon1.png", title: "Card Switch", desc: "Fast, secure routing for card transactions." },
			{ icon: "/images/icon1.png", title: "Co-brand Credit Card", desc: "Customisable co-branded cards to boost loyalty." },
			{ icon: "/images/icon1.png", title: "UPI Issuer Switch", desc: "Secure, high-speed UPI transaction routing." },
			{ icon: "/images/icon1.png", title: "Credit Line on UPI", desc: "Enable real-time Credit access for your customers." },
			{ icon: "/images/icon1.png", title: "Merchant Management", desc: "Simplify merchant onboarding and lifecycle management." },
			{ icon: "/images/icon1.png", title: "Clearing and Settlement", desc: "Automate reconciliation with compliance and transparency." },
			{ icon: "/images/icon1.png", title: "Payment Facilitator", desc: "Scale indirect sales with flexible PayFac solutions." },
			{ icon: "/images/icon1.png", title: "Bharat Connect Switch", desc: "Process bills effortlessly on India’s largest network." },
			{ icon: "/images/icon1.png", title: "UPI setu Acquiring Switch", desc: "The central switch to power any UPI transaction." },
		],
	},
	{
		section: "Acquirer Processing",
		features: [
			{ icon: "/images/icon1.png", title: "Merchant Management", desc: "Simplify merchant onboarding and lifecycle management." },
			{ icon: "/images/icon1.png", title: "Clearing and Settlement", desc: "Automate reconciliation with compliance and transparency." },
			{ icon: "/images/icon1.png", title: "Payment Facilitator", desc: "Scale indirect sales with flexible PayFac solutions." },
			{ icon: "/images/icon1.png", title: "Bharat Connect Switch", desc: "Process bills effortlessly on India’s largest network." },
			{ icon: "/images/icon1.png", title: "UPI setu Acquiring Switch", desc: "The central switch to power any UPI transaction." },
		],
	},
];

export const byBusiness = [
	{ title: "banks and financial institutions", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Government", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "E-Commerce", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Enterprises", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Brands and Corporates", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Fintech", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Start ups", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Small Business", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
];

export const byIndustry = [
	{ title: "Retail", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Health & Wellness", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Education", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Consumer electronics", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Furniture and furnishing", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Petroleum and Energy", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Food & Beverage", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Hospitality", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Fashion And Lifestyle", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Automobile", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Airlines", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
];

export const byUseCase = [
	{ title: "Affordability", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Ease of doing Business", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Revenue maximisation", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Loyalty & Repeat", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Multi-channel enablement", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
	{ title: "Marketing enablement", desc: "Accept & Manage Payments", icon: "/images/icon1.png" },
];

export const partners = [
	{ name: "Shopify", icon: "/images/icon1.png" },
	{ name: "Darwin Box", icon: "/images/icon1.png" },
	{ name: "Amadeus", icon: "/images/icon1.png" },
	{ name: "Magento", icon: "/images/icon1.png" },
	{ name: "Woocommerce", icon: "/images/icon1.png" },
];

export const developersTools = [
	{ name: "Platform", icon: "/images/icon1.png" },
	{ name: "Support", icon: "/images/icon1.png" },
	{ name: "API", icon: "/images/icon1.png" },
];
export const blogs = [
	{ name: "Blog", icon: "/images/icon1.png" },
	{ name: "Whitepaper", icon: "/images/icon1.png" },
	{ name: "Case-studies ", icon: "/images/icon1.png" },
];
