import { FC, ReactNode } from "react";

interface ContentSectionProps {
	children: ReactNode;
	className?: string;
}

const ContentSection: FC<ContentSectionProps> = ({ children, className }) => {
	return <div className={`p-8 bg-white-100 rounded-[10px] ${className}`}>{children}</div>;
};

export default ContentSection;
