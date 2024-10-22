import React from 'react';

function Order({ order, total }) {
  return (
    <div className="order-section">
      <h2>Orden actual</h2>
      {order.length > 0 ? (
        order.map((item, index) => (
          <div className="order-item" key={index}>
            <span>{item.name} - ${item.price}</span>
          </div>
        ))
      ) : (
        <p>NO VAS A COMER NADA?!?!.</p>
      )}
      <div className="total">
        <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default Order;



