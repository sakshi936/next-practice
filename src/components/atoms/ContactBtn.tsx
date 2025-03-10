interface contactProps {
	className?: string;
}

export function ContactBtn({ className }: contactProps) {
	return <button className={` ${className} bg-lime-green  rounded-4xl font-semibold py-4 px-6 text-sm  `}> Contact us</button>;
}
