import Item from './item';
import ItemList from './itemList';

export default function Page() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center">
        <main className="flex flex-col gap-8 row-start-2 items-center">
        {ItemList.map((item, i) => (
            <Item name={item.name} category={item.category} quantity={item.quantity} />
        ))}

        </main>
        </div>

    );
    }