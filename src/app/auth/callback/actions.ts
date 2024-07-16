"use server";

import { prisma } from "../../../lib/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

 export const authCheck = async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if(!user) return {status: false};

    const existingUser = await prisma.user.findUnique({
        where: {
            id: user.id
        }
    });

    if(!existingUser) {
        await prisma.user.create({
            data: {
                id: user.id,
                name: `${user.given_name} ${user.family_name}`,
                email: user.email,
                image: user.picture
            }
        });
    }
    return { status: true }
}

