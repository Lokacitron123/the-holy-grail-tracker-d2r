import { NextPage } from "next";
import { getAllUniques, getUniques } from "./lib/items";

const Home: NextPage = async () => {
  const itemsData = getAllUniques();
  const items: Item[] = await itemsData;

  return (
    <main className='min-h-screen'>
      <h1 className='text-5xl '>Diablo 2 Resurrected Item Fetcher</h1>
      <section className='flex flex-col gap3'>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </section>
      {items && items.length === 0 && <p>Sorry, no items available. </p>}
    </main>
  );
};

export default Home;

// Bg : #290000
