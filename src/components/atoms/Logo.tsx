import Image from "next/image";
import { logoProps } from "@/types/types";
export function Logo({ width = 99, height = 22 }: logoProps) {
	return (
		<div>
			<Image src="/images/logo.png" alt="Image description" width={99} height={22} />
		</div>
	);
}
