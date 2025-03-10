import { onlinePayment } from "@/data/data";
import Features from "../Feaures";
function OnlinePayments() {
	return <Features features={onlinePayment} category="Online Payments" className="grid-cols-3 gap-x-7 gap-y-7" />;
}

export default OnlinePayments;
