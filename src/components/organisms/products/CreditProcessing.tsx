import { creditProcessing } from "@/data/data";
import Image from "next/image";
import Features from "../Feaures";
function CreditProcessing() {
	return (
		<div>
			<div className="lg:hidden flex items-end mb-8 ">
				<Image src="/images/chevron-right.png" alt="next" width={20} height={20} className=" rotate-180" />
				<h2 className="text-sm font-medium text-title ">Credit Processing</h2>
			</div>
			{creditProcessing.map((section, idx) => (
				<div key={idx} className="mb-6">
					<h2 className="text-sm font-medium mb-6 text-content-text">{section.section}</h2>
					<Features features={section.features} />
				</div>
			))}
		</div>
	);
}

export default CreditProcessing;
