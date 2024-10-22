import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/menu.jsx';
import Order from './components/order.jsx';
import Payment from './components/payment.jsx';

function App() {
  const [menuItems, setMenuItems] = useState([]); 
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0); 
  const [isPaid, setIsPaid] = useState(false); 


  useEffect(() => {
    fetch('https://api-menu-9b5g.onrender.com/menu')
      .then(response => response.json()) 
      .then(data => setMenuItems(data)) 
      .catch(error => console.log('Error', error)); 
  }, []);


  const addToOrder = (item) => {
    setOrder([...order, item]); 
    setTotal(total + item.price); 
  };

 
  const makePayment = () => {
    setIsPaid(true);
  };

  return (
    <div className="app-container">
      <h1>Anton´s restaurant</h1>
      <div className="main-content">
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <Order order={order} total={total} />
        <Payment makePayment={makePayment} isPaid={isPaid} />
      </div>
    </div>
  );
}

export default App;

