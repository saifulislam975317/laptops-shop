import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Home = () => {
    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('https://stormy-river-25571.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))

    },[])

    return (
        <div className="row">
            {
                events.length === 0 && <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>
            }
            {
                events.map(event =><Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;