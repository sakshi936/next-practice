import { features } from "process";
import Grid from "@/components/atoms/Grid";
import { creditProcessing } from "@/data/data";
function CreditProcessing() {
	return (
		<div>
			{creditProcessing.map((section, idx) => (
				<div key={idx} className="mb-6">
					<h2 className="text-sm font-medium mb-6 text-content-text">{section.section}</h2>
					<Grid features={section.features} className="grid grid-cols-3 gap-6" />
				</div>
			))}
		</div>
	);
}

export default CreditProcessing;
