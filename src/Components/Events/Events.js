import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import EventListDetails from './EventListDetails';


const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [eventRegister, setEventRegister] = useState([])

    useEffect(() => {
        fetch(`https://fathomless-hamlet-56898.herokuapp.com/eventRegister/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setEventRegister(data))
    }, [loggedInUser.email, eventRegister])

    return (
        <div className="container">
            <Header></Header>
            <Grid container direction="row">
                {
                    eventRegister.map(eventList => <EventListDetails eventList={eventList} key={eventList._id}></EventListDetails>)
                }
            </Grid>
           
        </div>
    );
};

export default Events;