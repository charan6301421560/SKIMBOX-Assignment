import React from 'react';

function Shipping({ totalPrice }) {
  return (
    <div >
      <div className="shipping">
          <h1>FREE 2 DAY SHIPPING</h1>
          <h2>
            Total : DKK <span className="total">{totalPrice.toFixed(2)}</span>
          </h2>
        </div>
        <button>+ Add to Cart</button>
    </div>
  );
}

export default Shipping;