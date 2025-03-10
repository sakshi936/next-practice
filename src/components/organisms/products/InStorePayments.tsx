import { InStorePayment } from "@/data/data";
import Features from "../Feaures";
import Device from "../../atoms/Device";
export default function InStorePayments() {
	const features = InStorePayment.features;
	const devices = InStorePayment.devices;
	return (
		<div>
			{/* Features Section */}
			<Features features={features} category="In Store Payments" className="grid-cols-3 gap-y-7 lg:gap-y-14" />

			<hr className="my-10 border-gray-200" />

			{/* Devices Section */}
			<h2 className="font-medium text-base text-content-text mb-5">Devices</h2>
			<div className="hidden lg:grid grid-cols-5 gap-4">
				{devices.map((device, index) => (
					<Device device={device} key={index} />
				))}
			</div>
			{/*Mobile view  */}
			<div className="lg:hidden w-full overflow-x-auto whitespace-nowrap pb-5">
				<div className="flex gap-2.5">
					{devices.map((device, index) => (
						<Device device={device} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
