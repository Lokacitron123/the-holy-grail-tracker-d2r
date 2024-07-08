import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { getMyUniques } from "@/lib/actions/items";
import { foundItem } from "@prisma/client";

const Page = async () => {
  const itemsData = getMyUniques();
  const items: foundItem[] = await itemsData;

  return (
    <BaseLayout>
      <h1>hello</h1>
      {items.map((item) => (
        <li key={item.id}>name: {item.name}</li >
      ))}
    </BaseLayout>
  );
};

export default Page;
