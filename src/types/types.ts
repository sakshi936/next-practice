import { FC } from "react";

export interface navItemsType {
	name: string;
	page: FC;
}
export interface productItemsType {
	title: string;
	component: FC;
	desc: string;
	icon: string;
}

export interface logoProps {
	width?: number;
	height?: number;
}

export type feature = {
	title: string;
	desc: string;
	icon: string;
};

export type device = {
	title: string;
	image: string;
};

export type InStorePaymentType = {
	features: feature[];
	devices: device[];
};

type PrepaidItem = {
	name: string;
	desc: string;
	icon: string;
};

export type PrepaidCategory = {
	title: string;
	items: PrepaidItem[];
};

export interface sidebarProps {
	navItems: productItemsType[];
	selected: string;
	setSelected: (name: string) => void;
	navTitle: string;
}

export type CreditProcessingTypes = {
	section: string;
	features: feature[];
};
