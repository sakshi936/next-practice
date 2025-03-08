import Grid from "@/components/atoms/Grid";
import React from "react";
import { byBusiness } from "@/data/data";

function ByBusiness() {
	return <Grid features={byBusiness} className="grid grid-cols-2 gap-7" />;
}

export default ByBusiness;
