import Image from "next/image";
import { InStorePayment } from "@/data/data";
import Features from "../Feaures";
import Device from "../../atoms/Device";
export default function InStorePayments() {
	const features = InStorePayment.features;
	const devices = InStorePayment.devices;
	return (
		<div>
			{/* Features Section */}
			<Features features={features} />

			<hr className="my-10 border-gray-200" />

			{/* Devices Section */}
			<h2 className="font-medium text-base text-content-text mb-5">Devices</h2>
			<div className="grid grid-cols-5 gap-4">
				{devices.map((device, index) => (
					<Device device={device} key={index} />
				))}
			</div>
		</div>
	);
}
