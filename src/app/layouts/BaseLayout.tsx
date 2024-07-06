import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface BaseLayoutInterface {
	children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutInterface) => {
	return (
		<div className="flex max-w-5xl mx-auto relative">
			<Sidebar />
			<div className="w-full">{children}</div>
		</div>
	);
};

export default BaseLayout;
