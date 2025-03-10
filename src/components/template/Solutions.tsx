"use client";
import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import { solutionsItems } from "@/data/data";
import ContentSection from "../organisms/ContentSection";
import MoblieSubMenu from "../organisms/MobileSubMenu";

export default function Solutions() {
	const [selected, setSelected] = useState(solutionsItems[0].title);

	const selectedItem = solutionsItems.find((item) => item.title === selected);

	return (
		<>
			<div className="hidden lg:flex gap-4 w-[1016px] h-fit bg-bg-dark absolute p-5 ml-[10%] rounded-b-[28px]">
				<Sidebar navItems={solutionsItems} selected={selected} setSelected={setSelected} navTitle={"Solutions"} />
				{selectedItem && <ContentSection className="w-[651px]">{<selectedItem.component />}</ContentSection>}
			</div>
			{/* Mobile view */}
			<div className="lg:hidden">
				<MoblieSubMenu items={solutionsItems} category="Solutions" />
			</div>
		</>
	);
}
