import { onlinePayment } from "@/data/data";
import Grid from "../../atoms/Grid";
import Features from "../Feaures";
function OnlinePayments() {
	return <Features features={onlinePayment} category="Online Payments" className="gap-x-7 gap-y-7" />;
}

export default OnlinePayments;
