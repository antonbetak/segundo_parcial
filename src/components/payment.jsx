import React from 'react';

function Payment({ makePayment, isPaid }) {
  let message = null;
  if (isPaid) {
    message = <p>Payment Successful!</p>;
  }

  return (
    <div className="payment-section">
      <h2>Payment</h2>
      <button onClick={makePayment}>Pay</button>
      {message} 
    </div>
  );
}

export default Payment;


