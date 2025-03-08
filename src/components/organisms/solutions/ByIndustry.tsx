import Grid from "@/components/atoms/Grid";
import { byIndustry } from "@/data/data";
import React from "react";

function ByIndustry() {
	return <Grid features={byIndustry} className="grid grid-cols-2 gap-x-7 gap-y-1" />;
}

export default ByIndustry;
