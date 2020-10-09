import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import VolunteerCart from '../VolunteerCart/VolunteerCart';

const Home = () => {
    const [volunteerTasks, setVolunteerTasks] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-hamlet-56898.herokuapp.com/taskEvents')
        .then(res => res.json())
        .then(data => setVolunteerTasks(data))
    }, [])

    return (
  
        <div className="container">
                    <Header></Header>
            <div className="row mt-5">

               {
                volunteerTasks.map(task => <VolunteerCart task={task} key={task.id}></VolunteerCart>)
              }
            </div>
        </div>

    );
};

export default Home;

