"use server";

import prisma from "@/lib/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const authCheck = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) return { status: false };

  const existingUser = await prisma.user.findUnique({
    where: { userId: user.id },
  });

  // Fixed - added userId field
  // Reason - Mongodb id object not compatible with Kindle id
  if (!existingUser) {
    await prisma.user.create({
      data: {
        userId: user.id,
        email: user.email!,
        name: `${user.given_name} ${user.family_name}`,
        image: user.picture,
      },
    });
  }

  return { status: true };
};
