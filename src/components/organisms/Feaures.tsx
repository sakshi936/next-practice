import { FeaturesProps } from "@/types/types";
import Grid from "../atoms/Grid";
import Image from "next/image";

function Features({ features, category, className }: FeaturesProps) {
	return (
		<>
			{category && (
				<div className="lg:hidden flex items-end mb-8 ">
					<Image src="/images/chevron-right.png" alt="next" width={20} height={20} className=" rotate-180" />
					<h2 className="text-sm font-medium text-title ">{category}</h2>
				</div>
			)}

			<Grid className={`${className}`} features={features} />
		</>
	);
}

export default Features;
