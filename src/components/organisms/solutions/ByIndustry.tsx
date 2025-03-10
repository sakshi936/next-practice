import { byIndustry } from "@/data/data";
import React from "react";
import Features from "../Feaures";

function ByIndustry() {
	return <Features features={byIndustry} className="gap-7" category="By Industry" />;
}

export default ByIndustry;
