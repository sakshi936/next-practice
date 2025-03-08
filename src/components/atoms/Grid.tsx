import Image from "next/image";
import { feature } from "@/types/types";

interface FeaturesProps {
	features: feature[];
	className: string;
}

function Grid({ features, className }: FeaturesProps) {
	return (
		<div className={` ${className}`}>
			{features.map((feature, index) => (
				<div key={index} className="flex items-start gap-3 min-h-14">
					<Image src={feature.icon} alt={feature.title} width={40} height={40} />
					<div>
						<h3 className="font-semibold text-base text-title">{feature.title}</h3>
						<p className="text-xs text-content-text">{feature.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Grid;
