import React from 'react';
import {Link} from 'react-router-dom';

function OrderConfirmed() {
  return (
    <div>
        <p>Your Order has been placed!</p><br />
        <p>Our Chefs have started to craft your pizza! Await to be astonished!</p>
        <Link to="/user/dashboard">Return to home Page</Link>
    </div>

  )
}

export default OrderConfirmed;