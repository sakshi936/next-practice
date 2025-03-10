"use client";
import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import { productItems } from "@/data/data";
import ContentSection from "../organisms/ContentSection";
import MoblieSubMenu from "../organisms/MobileSubMenu";

export default function Products() {
	const [selected, setSelected] = useState(productItems[0].title);

	const selectedItem = productItems.find((item) => item.title === selected);

	return (
		<>
			<div className="hidden lg:flex gap-4 w-full h-fit bg-bg-dark absolute px-10 py-5">
				<Sidebar navItems={productItems} selected={selected} setSelected={setSelected} navTitle={"Products"} />
				{selectedItem && <ContentSection className="w-[1016px]">{<selectedItem.component />}</ContentSection>}
			</div>
			{/* Mobile view */}
			<div className="lg:hidden">
				<MoblieSubMenu items={productItems} category="Products" />
			</div>
		</>
	);
}
