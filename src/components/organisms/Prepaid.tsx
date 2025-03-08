import Image from "next/image";
import { prepaid } from "@/data/data";
function Prepaid() {
	return (
		<div className="grid grid-cols-3 gap-6">
			{prepaid.map((category, index) => (
				<div key={index}>
					<h3 className="text-sm font-medium mb-4 text-content-text ">{category.title}</h3>
					<ul className="space-y-4">
						{category.items.map((item) => (
							<li key={item.name} className="flex gap-3 items-start min-h-16">
								<Image src={item.icon} alt="icon" width={40} height={40} />
								<div>
									<h4 className="font-semibold text-base text-title">{item.name}</h4>
									<p className="text-xs  text-content-text">{item.desc}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default Prepaid;
