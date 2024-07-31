import { NextPage } from "next";
import { getAllUniques } from "../lib/actions/items";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ItemCard from "./components/ItemCard";
import BaseLayout from "./layouts/BaseLayout";

const Home: NextPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const itemsData = getAllUniques();
  const items: Item[] = await itemsData;

  return (
    <BaseLayout>
      <main className='min-h-screen'>
        <h1 className='text-4xl text-diablo'>
          Diablo 2 Resurrected Item Fetcher
        </h1>
        <section className='flex flex-col gap-3 w-full mx-auto'>
          {items.map((item) => (
            <ItemCard item={item} userId={user?.id} key={item.id} />
          ))}
        </section>
        {items && items.length === 0 && <p>Sorry, no items available. </p>}
      </main>
    </BaseLayout>
  );
};

export default Home;
