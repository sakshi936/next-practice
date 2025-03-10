import { byIndustry } from "@/data/data";
import React from "react";
import Features from "../Feaures";

function ByIndustry() {
	return <Features features={byIndustry} className="grid-cols-2 gap-y-2" category="By Industry" />;
}

export default ByIndustry;
