import { onlinePayment } from "@/data/data";
import Grid from "../../atoms/Grid";
function OnlinePayments() {
	return <Grid features={onlinePayment} className="grid grid-cols-3 gap-6" />;
}

export default OnlinePayments;
