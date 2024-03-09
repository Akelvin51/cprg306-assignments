export default function Item({ name, quantity, category, onSelect }) {
  // Call the onSelect function with the item's name (or any identifier you prefer) when the list item is clicked
  return (
    <li 
      className="border p-4 mb-2 bg-gray-800 border-gray-700 rounded text-white cursor-pointer"
      onClick={() => onSelect(name)} // This triggers the onSelect function passed as a prop
    >
      <p className="font-bold capitalize">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
