import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { getMyUniques } from "@/lib/actions/items";
import { FoundItem } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const itemsData = getMyUniques(user?.id);
  const items: FoundItem[] = await itemsData;

  return (
    <BaseLayout>
      <h1>hello</h1>
      {items.map((item) => (
        <li key={item.id}>name: {item.name}</li>
      ))}
    </BaseLayout>
  );
};

export default Page;
