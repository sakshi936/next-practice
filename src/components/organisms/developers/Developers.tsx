import Image from "next/image";
import { developersTools } from "@/data/data";
export default function Developers() {
	return (
		<>
			<div className="hidden lg:block max-w-lg mx-auto bg-bg-dark  rounded-b-[28px] p-5 mr-[200px]">
				<div className="bg-white rounded-b-2xl p-6 max-w-lg mx-auto">
					<h2 className="text-lg font-semibold text-gray-900">{developersTools.heading}</h2>
					<p className="text-gray-500 text-sm mb-4">{developersTools.desc}</p>
					<div className="grid grid-cols-2 gap-4">
						{developersTools.features.map((tool, index) => (
							<div key={index} className="flex items-center gap-3 p-2 ">
								<Image src={tool.icon} alt={tool.name} width={40} height={40} />
								<span className="font-semibold text-base text-title">{tool.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* mobile view */}
			<div className="lg:hidden bg-white ">
				<div className="lg:hidden flex items-end mb-8 ">
					<Image src="/images/chevron-right.png" alt="next" width={20} height={20} className=" rotate-180" />
					<h2 className="text-sm font-medium text-title ">Developers</h2>
				</div>
				<h2 className="text-lg font-semibold text-gray-900">{developersTools.heading}</h2>
				<p className="text-gray-500 text-sm mb-4">{developersTools.desc}</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{developersTools.features.map((tool, index) => (
						<div key={index} className="flex items-center gap-3 ">
							<Image src={tool.icon} alt={tool.name} width={40} height={40} />
							<span className="font-semibold text-base text-title">{tool.name}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
