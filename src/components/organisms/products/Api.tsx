import { apiDpi } from "@/data/data";
import Features from "../Feaures";
function Api() {
	return <Features features={apiDpi} category="Apis for Dpi" className="grid-cols-3 gap-y-7 lg:gap-y-14" />;
}

export default Api;
