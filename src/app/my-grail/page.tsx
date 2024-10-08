import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { getMyUniques } from "@/lib/actions/items";
import { FoundItem } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { procentCalc } from "@/lib/utils";
import MyGrailPieChart from "../components/MyGrailPieChart";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "User's list of holy grail items found by the user",
  description:
    "A list containing all the items a user has added to their found-list of items available in the game of Diablo 2 to be found.",
};

// interface PageProps {
//   items: FoundItem[];
// }

// { items }: PageProps

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return <h2 className='text-center'>Please login...</h2>;
  }
  const itemsData = getMyUniques(user?.id);
  const items: FoundItem[] = await itemsData;

  const { percentage, missing } = procentCalc(items.length);

  return (
    <BaseLayout>
      <h1 className='text-3xl md:text-5xl py-5 text-center'>My Holy Grail</h1>
      <MyGrailPieChart percentage={percentage} missing={missing} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>name: {item.name}</li>
        ))}
      </ul>
    </BaseLayout>
  );
};

// Out of date
// export const getServerSideProps = async () => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();

//   if (!user) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   const items = await getMyUniques(user.id);

//   return {
//     props: {
//       items: items || [],
//     },
//   };
// };

export default Page;
