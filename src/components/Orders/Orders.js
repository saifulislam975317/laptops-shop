import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    
    const {orders} = useContext(UserContext)
    console.log('orders', orders)

   
 

    return (
        <div>
            <h3>This is order page</h3>
        
            
        </div>
    );
};

export default Orders;