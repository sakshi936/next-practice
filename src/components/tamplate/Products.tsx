"use client";
import { useState } from "react";
import ProductSidebar from "../organisms/ProductSidebar";
import { productItems } from "@/data/data";
import ContentSection from "../organisms/ContentSection";

export default function Products() {
	const [selected, setSelected] = useState("In-store Payments");

	const selectedItem = productItems.find((item) => item.item === selected);

	return (
		<div className="flex gap-1.5 w-full h-auto bg-bg-dark absolute px-10 py-5">
			<ProductSidebar navItems={productItems} selected={selected} setSelected={setSelected} />

			{selectedItem && <ContentSection>{<selectedItem.component />}</ContentSection>}
		</div>
	);
}
