import React from 'react';
import { Link } from 'react-router-dom';
import childSupport from '../../images/childSupport.png';

const VolunteerCart = ({task}) => {

    return (
        <Link to="/register">
        <div className="col-md-3 mb-4">
            <img style={{height: '300px'}} src={require(`../../images/${task.pic}`)} alt=""/>
            <h3 style={{textDecoration: 'none', textAlign: 'center'}}>{task.name}</h3>
        </div>
        </Link>
    );
};

export default VolunteerCart;