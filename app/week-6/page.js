import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-gray-950">
      <h1 className="font-bold text-3xl">Shopping List</h1>
      <br></br>
      <ItemList />
    </main>
  );
}