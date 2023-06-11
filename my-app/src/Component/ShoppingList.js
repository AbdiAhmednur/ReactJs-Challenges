import ShoppingListItem from "./ShoppingListItem"; 

function ShoppingList({ items }) {
    return (
      <ul>
        {items.map((i) => (
         <ShoppingListItem 
         key={i.id}
         item={i.item} 
         quantity={i.quantity} 
         completed={i.completed} 
         /> 

         // <ShoppingListItem key={i.id} {...i} />

        ))}
      </ul>
    );
  }
  
  export default ShoppingList;
  




  
/*const data = [
    {items: 'eggs', quantity: 12, completed: false },
    {items: 'milk', quantity: 1, completed: true },
    {items: 'chicken breast', quantity: 4, completed: false },
    {items: 'carrots ', quantity: 6, completed: true },
  ]*/