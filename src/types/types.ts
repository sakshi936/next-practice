import { FC } from "react";

export interface navItemsType {
	name: string;
	page: FC;
}
export interface productItemsType {
	item: string;
	component: FC;
	desc: string;
	icon: string;
}

export interface logoProps {
	width?: number;
	height?: number;
}

type Feature = {
	name: string;
	desc: string;
	icon: string;
};

type Device = {
	name: string;
	image: string;
};

export type InStorePaymentType = {
	features: Feature[];
	devices: Device[];
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

export interface productSidebarProps {
	navItems: productItemsType[];
	selected: string;
	setSelected: (name: string) => void;
}
