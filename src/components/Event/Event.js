import React, { useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Event.css'

const Event = ({event}) => {

  console.log("event",event);
    const history= useHistory()
    const {setCheckOut} = useContext(UserContext)
    const handleClick = (event) =>{
       setCheckOut(event)
        const url=(`/checkOut`)
       
        history.push(url)
    }


    
    return (
        <div id="items-container" className="col-md-3">

            <img style={{height:'300px'}} src={event.imageURL} alt=""/>
            <h2 className="name">{event.name}</h2>
            <br/>
            <div className="priceAndButton">
            <h3>${event.price}</h3>
            <button onClick={()=>handleClick(event)} className="buyNow-button">Buy Now</button>
            </div>
        </div>
    );
};

export default Event;