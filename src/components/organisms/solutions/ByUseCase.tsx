import { byUseCase } from "@/data/data";
import Features from "../Feaures";
function ByUseCase() {
	return <Features features={byUseCase} className="grid-cols-2 gap-x-7 gap-y-7" category="By use Case" />;
}

export default ByUseCase;
