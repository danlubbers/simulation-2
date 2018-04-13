import React, {Component} from 'react';
import House from '../House/House';

import {Link} from 'react-router-dom';

export default class Dashboard extends Component {

    render() {
        return(
            <div className="dashboard">
            <Link to="/Wizard"><button className="newPropertyBtn">Add New Property</button></Link>
                <div><House /></div>
            </div>
        )
    }

}