import React, {Component} from 'react';
import House from '../House/House';

import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        };
    }
    
   componentDidMount() {
       axios.get(`/api/getAllHouses`).then(res => {
           console.log('Array is loading!')
           this.setState({
               houses: res.data
           })
       })
   }

    deleteAllHouses() {

    }

    render() {
        return(
            <div className="dashboard">
            <Link to="/Wizard"><button className="newPropertyBtn">Add New Property</button></Link>
                <div><House /></div>
            </div>
        )
    }

}