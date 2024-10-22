import React from 'react';

function Menu({ menuItems, addToOrder }) {
  return (
    <div className="menu-section">
      <h2>Menu</h2>
      {menuItems.length > 0 ? (
        menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => addToOrder(item)}>Add</button>
          </div>
        ))
      ) : (
        <p>Cargando...</p> 
      )}
    </div>
  );
}

export default Menu;

