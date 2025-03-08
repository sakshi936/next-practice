import { FC, ReactNode } from "react";

interface ContentSectionProps {
	children: ReactNode;
}

const ContentSection: FC<ContentSectionProps> = ({ children }) => {
	return <div className="w-3/4 p-6 bg-white-100 rounded-[10px]">{children}</div>;
};

export default ContentSection;
