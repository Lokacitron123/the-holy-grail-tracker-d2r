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
import React, { useState } from "react";

interface ItemCardProps {
  item: Item;
  userId: string | undefined;
}

const ItemCard = ({ item, userId }: ItemCardProps) => {
  const [responseMessage, setResponseMessage] = useState<
    string | undefined | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddUnique = async () => {
    setIsLoading(true);
    const response = await addUnique(item, userId);

    if (response.success) {
      setResponseMessage("Item successfully added");
      console.log(responseMessage);
    } else {
      setResponseMessage("You have already found this item");
      console.log(responseMessage);
    }
    
    setIsLoading(false);
  };

  // TODO - Fix UI for displaying message after adding item
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.itemLvl}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant={"default"}
          onClick={handleAddUnique}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Found Item"}
        </Button>
        {responseMessage && <p>{responseMessage}</p>}
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
