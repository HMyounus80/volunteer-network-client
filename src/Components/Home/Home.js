import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import VolunteerCart from '../VolunteerCart/VolunteerCart';

const Home = () => {
    const [volunteerTasks, setVolunteerTasks] = useState([]);

    useEffect(() => {
        setVolunteerTasks(fakeData)
    },[])
    return (

       
    //   <div className="container">
    //           <div className="container input-aria">
    //               <h1>I grow by helping people in need</h1>
    //               <div class="input-group">
    //                  <input type="text" class="form-control" placeholder="Search " aria-describedby="button-addon2"/>
    //                       <div class="input-group-append">
    //                         <button class="btn btn-primary input-btn" type="button" id="button-addon2">Search</button>
    //                    </div>
    //               </div>
    //           </div>   
                <div className="container">
                    <Header></Header>
                <div className="row mt-5">

               {
                volunteerTasks.map(task => <VolunteerCart task={task}></VolunteerCart>)
              }
              </div>
              </div>

            //  </div>
              

      
    );
};

export default Home;

