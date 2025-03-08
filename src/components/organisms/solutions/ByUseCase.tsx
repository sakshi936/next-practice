import { byUseCase } from "@/data/data";
import Grid from "@/components/atoms/Grid";
function ByUseCase() {
	return <Grid features={byUseCase} className="grid grid-cols-2 gap-7" />;
}

export default ByUseCase;
