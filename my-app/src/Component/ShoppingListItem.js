


function ShoppingListItem({item, quantity, completed}) {
    const styles = {color: completed ? "grey": "red", 
    textDecoration: completed? "line-through" : "none",
 };
    return (
        <div>
            <li style={styles}>
                {item} -{quantity}
            </li>

        </div>

    );
}

export default ShoppingListItem; 





/*<li key={i.id} 
          style={{color: i.completed ? "grey": "red", 
          textDecoration: i.completed ? "line-through" : "none",
        
        }}
        >
            {i.item} - {i.quantity}
          </li>*/