import { device } from "@/types/types";
import Image from "next/image";

interface DeviceProps {
	device: device;
}
function Device({ device }: DeviceProps) {
	return (
		<div key={device.title} className="relative bg-bg-light p-4 rounded-lg  max-w-[172px] h-[208px]">
			<div className="flex  items-start justify-between">
				<h2 className="font-semibold text-base text-title mb-4">{device.title}</h2>
				<span className="w-[28px] h-[28px] bg-white rounded-full cursor-pointer">
					<Image src="/images/next.png" alt="arrow" width={28} height={28} className="mx-auto" />
				</span>
			</div>
			<Image src={device.image} alt={device.title} width={420} height={420} className="mx-auto absolute right-0 bottom-0" />
		</div>
	);
}

export default Device;
