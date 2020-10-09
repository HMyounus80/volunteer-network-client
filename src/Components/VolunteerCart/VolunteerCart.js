import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerCart = (props) => {
    
    const {name, picture, _id} = props.task;

    return (
        <Link to={`/register/${_id}`}>
        
        <div className="col-md-3">
        <img style={{height: '300px'}} src={picture} alt=""/>
        <h4 style={{textDecoration: 'none', textAlign:'center'}}>{name}</h4> 
      
        </div>
        </Link>
       
    );
};

export default VolunteerCart;

 
            
    