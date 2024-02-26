// Item.js
function Item({ name, quantity, category }) {
    return (
      <li className="border p-4 mb-2 bg-gray-800 border-gray-700 rounded text-white">
        <p className="font-bold">{name}</p>
        <p>Buy {quantity} in {category}</p>
      </li>
    );
  }
  
  export default Item;
  
  

  

  
 
  