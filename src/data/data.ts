import { navItemsType } from "@/types/types";
import { Blogs } from "@/components/pages/Blogs";
import { Developers } from "@/components/pages/Developers";
import { Partners } from "@/components/pages/Partners";
import { Solutions } from "@/components/pages/Solutions";
import { Products } from "@/components/pages/Products";
// import { ContactBtn } from "@/components/atoms/ContactBtn";

export const navItems: navItemsType[] = [
	{ name: "Products", page: Products },
	{ name: "Solutions", page: Solutions },
	{ name: "Partners", page: Partners },
	{ name: "Developers", page: Developers },
	{ name: "Blogs", page: Blogs },
	// { name: "ContactBtn", page: ContactBtn },
];
