import React from "react";

interface ItemCardProps {
	item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
	return (
		<div className="flex flex-col gap-3 my-5">
			<h3 className="text-2xl font-bold tracking-tighter">{item.name}</h3>
			<p>Item level: {item.itemLvl}</p>
		</div>
	);
};

export default ItemCard;
