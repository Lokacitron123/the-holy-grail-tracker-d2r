"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addUnique } from "@/lib/actions/items";
import React from "react";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.itemLvl}</p>
      </CardContent>
      <CardFooter>
        <Button variant={"default"} onClick={() => addUnique(item)}>
          Found This
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
