import Image from "next/image";
import { blogs } from "@/data/data";

export default function Blogs() {
	return (
		<div className="max-w-lg mx-auto bg-bg-dark  rounded-b-[28px] p-5 mr-[200px]">
			<div className="bg-white rounded-b-2xl p-6 max-w-lg mx-auto">
				<h2 className="text-lg font-semibold text-gray-900">PineLabs resources</h2>
				<p className="text-gray-500 text-sm mb-4">Get access to diverse tools to help grow your business</p>
				<div className="grid grid-cols-2 gap-4">
					{blogs.map((resources, index) => (
						<div key={index} className="flex items-center gap-3 p-2 ">
							<Image src={resources.icon} alt={resources.name} width={40} height={40} />
							<span className="font-semibold text-base text-title">{resources.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
