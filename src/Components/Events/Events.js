import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';


const Events = () => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/taskEvents?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    

    const eventCancelHandler=(id)=>{
        fetch('http://localhost:5000//event-cancel',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                id:id
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                const existingEvents=events.filter(data=>data._id !== id)
                setEvents(existingEvents)
            }
        })
    }


    return (
        <div>
           <h3 className="text-center">You have: {events.length} Events</h3>
           <Grid container item xs={11} justify='center'  spacing='5' style={{margin:'auto'}}>
                {
                    events.map(event=>{
                       return(
                            <Grid key={event._id} container item xs={10} sm={5} justify='space-around' 
                            style={{boxShadow:'0px 2px 5px lightGray', borderRadius:'10px', width:'100%',margin:'10px'}}>
                                <Grid item xs={10} md={5} style={{width:'50%', marginLeft:'15px'}}>
                                    <h5>Name:{event.name}</h5>
                                    <p>Email:{event.email}</p>
                                     <p>Date:{(new Date(event.date))}</p>
                                     <p>Description: {event.description}</p>
                                     <p>TaskName: {event.volunteerTaskName}</p>

                                    <div style={{textAlign:'right', marginTop:'30px'}}>
                                    <button onClick={()=>eventCancelHandler(event._id)}  className='event-cancel'>
                                        cancel
                                    </button>
                                    </div>
                                </Grid>
                            </Grid>
                       )
                    })
                }
            </Grid>
        </div>
    );
};

export default Events;