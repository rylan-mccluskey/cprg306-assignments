export default function Item({ name, category, quantity }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <h2>{name}</h2>
            <h3>{category}</h3>
            <p>{quantity}</p>
        </div>
    );
}