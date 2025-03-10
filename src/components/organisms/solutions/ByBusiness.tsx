import React from "react";
import { byBusiness } from "@/data/data";
import Features from "../Feaures";

function ByBusiness() {
	return <Features features={byBusiness} className="grid-cols-2 gap-x-7 gap-y-2 lg:gap-y-7" category="By Business" />;
}

export default ByBusiness;
