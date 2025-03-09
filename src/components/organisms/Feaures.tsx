import { feature } from "@/types/types";
import Grid from "../atoms/Grid";

interface FeaturesProps {
	features: feature[];
}

function Features({ features }: FeaturesProps) {
	return <Grid className="grid grid-cols-3 gap-6" features={features} />;
}

export default Features;
