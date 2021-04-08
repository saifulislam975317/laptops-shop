import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = ({event}) => {

    const history= useHistory()
    const {setOrders} = useContext(UserContext)
    const handleClick = event =>{
       setOrders(event)
        const url=(`/orders`)
       history.push(url)
     

    }
    


    const {checkOut} = useContext(UserContext)
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        fetch(`https://stormy-river-25571.herokuapp.com/events`)
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])
   
    return (
        <div className="checkOut-container">
            <div className="descAndPrice">
                <h3>Description</h3>
                <h3>Price</h3>
                
            </div>
            <div className="nameAndPriceDiv">
            <h1 className="name">{checkOut.name}</h1>
            <h2 className="price">${checkOut.price}</h2>
            </div>
            <div className="checkOut-button">
            <button onClick={()=>handleClick(event)}>CheckOut</button>
            </div>
        </div>
    );
};

export default CheckOut;