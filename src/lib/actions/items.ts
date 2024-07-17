"use server";

import prisma from "@/lib/db/prisma";

// rest endpoint
const restEndPoint = process.env.HELLFORGE_UNIQUES as string;
export async function getAllUniques() {
  try {
    const res = await fetch(restEndPoint);

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function getUniques(id: string) {
  try {
    const res = await fetch(`${restEndPoint}/${id}`);

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addUnique(item: Item) {
  const { name, id, itemLvl } = item;

  console.log("Logging item from addUnique", item);
  await prisma.foundItem.create({
    data: {
      itemId: id,
      name: name,
      itemLvl: itemLvl,
    },
  });
}

export async function getMyUniques() {
  const items = await prisma.foundItem.findMany();
  console.log(items);
  return items;
}
