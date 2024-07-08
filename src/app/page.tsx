import { NextPage } from "next";
import { getAllUniques, getUniques } from "../lib/actions/items";
import ItemCard from "./components/ItemCard";
import BaseLayout from "./layouts/BaseLayout";

const Home: NextPage = async () => {
  const itemsData = getAllUniques();
  const items: Item[] = await itemsData;

  return (
    <BaseLayout>
      <main className='min-h-screen'>
        <h1 className='text-5xl text-diablo'>
          Diablo 2 Resurrected Item Fetcher
        </h1>
        <section className='flex flex-col gap-3 w-full mx-auto'>
          {items.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </section>
        {items && items.length === 0 && <p>Sorry, no items available. </p>}
      </main>
    </BaseLayout>
  );
};

export default Home;
