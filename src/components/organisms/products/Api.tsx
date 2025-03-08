import { apiDpi } from "@/data/data";
import Grid from "@/components/atoms/Grid";
function Api() {
	return <Grid features={apiDpi} className="grid grid-cols-3 gap-6" />;
}

export default Api;
