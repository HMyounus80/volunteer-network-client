import React from 'react';
import { Button } from 'react-bootstrap';

const EventListDetails = (props) => {
    
    const {volunteerTaskName, date, picture, _id} = props.eventList;


    const eventCancelHandler = () => {
        fetch(`https://fathomless-hamlet-56898.herokuapp.com/eventCancel/${_id}` , {

            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('event cancel successfully')
            }
        })
    }

    return (
        <div className="container">
            <h3>This is Event List</h3>

            <div className="event-card-img">
                <img src={picture} alt=""/>
            </div>

            <div className="event-card-details">
                <h4>{volunteerTaskName}</h4>
                <h5>{date}</h5>
                <Button variant="danger" className="btn-cancel" ocClick={eventCancelHandler}>Cancel</Button>
            </div>

        </div>
    );
};

export default EventListDetails;