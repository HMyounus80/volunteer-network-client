import React from 'react';
import Header from '../Header/Header';


const Admin = () => {
    const handleAddEventTask = () => {
        const addEvent = {};
        fetch('https://fathomless-hamlet-56898.herokuapp.com/addVolunteerEvent', {
            method: 'POST',
            headers: {
            
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addEvent)
        })
    }
    return (
        <div className="container">
            <Header></Header>
            <h3 className="text-center">This is a Admin Page</h3>
                <form action="">

                    <p><span></span>Name:<input type="text"/></p>
                    <p><span></span>Email<input type="text"/></p>
                    <p><span></span>Image<input type="file"/></p>
                    

                <button className="btn btn-primary d-block" onClick={handleAddEventTask}>Add Event Task</button>
            </form>
        </div>
    );
};

export default Admin;