import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Register.css';
import {useForm} from 'react-hook-form'
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';    



const RegisterForm = () => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit= data =>{
      console.log('form Submit', data);
      const eventDetail = {...loggedInUser, Event: data, eventTime: new Date()}


      fetch('http://localhost:5000/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventDetail)

      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
        if(data){
          alert('successfully')
        }
      })
  };
     
  console.log(watch('example'));
    
    return (
        <div className="container">
          <Header></Header>
          <div className="row mt-5 mb-3">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
             <h3 className="text-center">Register as a Volunteer</h3>
              <label>Full Name</label>
              <input name="name" className="form-control" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name"/><br/>
              {errors.name && <span className="error">Name is required</span>} 
              <label>Your Email </label>
              <input name="email" className="form-control"  defaultValue={loggedInUser.email}  ref={register({ required: true })} placeholder="Username or email" /><br/>
              {errors.email && <span className="error">Email is required</span>} 
              <label>Date</label>
              <input type="date" className="form-control" name="date" ref={register({ required: true })} placeholder="Date"/> <br/>
              {errors.date && <span className="error">Date is required</span>}
              <label>description</label>
              <input name="description" className="form-control" ref={register({ required: true })} placeholder="write your description" /><br/>
              {errors.description && <span className="error">description is required</span>} 

                <label>Task Name</label>
              <input name="volunteerTaskName" className="form-control" ref={register({ required: true })} placeholder="Organize Task Name"/>
              {errors.volunteerTaskName&& <span className="error">Organize Task Name required</span>}

             <Button variant="primary" type="submit" className="mt-2"  size="lg" block>Registration</Button>
        </form>
        
            </div>

            <div className="col-md-3">
              
            </div>
          </div>
         
       </div> 
    );
};

export default RegisterForm;