"use client";
import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import { solutionsItems } from "@/data/data";
import ContentSection from "../organisms/ContentSection";
import MoblieSubMenu from "../organisms/MobileSubMenu";

export default function Solutions() {
	const [selected, setSelected] = useState(solutionsItems[0].title);
	// console.log(selected);

	const selectedItem = solutionsItems.find((item) => item.title === selected);

	return (
		<>
			<div className="hidden lg:flex gap-4 w-[1016px] h-fit bg-bg-dark absolute  right-[150px] p-5 rounded-b-[28px]">
				<Sidebar navItems={solutionsItems} selected={selected} setSelected={setSelected} navTitle={"Solutions"} />
				{selectedItem && <ContentSection className="w-[651px]">{<selectedItem.component />}</ContentSection>}
			</div>
			{/* Mobile view */}
			<div className="lg:hidden">
				<MoblieSubMenu items={solutionsItems} activePage={selected} setActivePage={setSelected} navTitle="Solutions" />
			</div>
		</>
	);
}
