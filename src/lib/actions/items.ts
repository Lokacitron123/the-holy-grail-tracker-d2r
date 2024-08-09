"use server";

import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

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

export async function addUnique(item: Item, userId: string | undefined) {
  const { name, id, itemLvl } = item;

  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const alreadyFoundItem = await prisma.foundItem.findFirst({
      where: {
        itemId: id,
      },
    });

    if (alreadyFoundItem) {
      return { message: "You have already found this item!" };
    }

    await prisma.foundItem.create({
      data: {
        itemId: id,
        name: name,
        itemLvl: itemLvl,
        user: {
          connect: { userId: userId },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.log("error message", error);
    return { success: false, error };
  }
}

export async function getMyUniques(userId: string | undefined) {
  if (!userId) {
    throw new Error("User ID is required");
  }
  const items = await prisma.foundItem.findMany({ where: { userId: userId } });

  return items;
}
