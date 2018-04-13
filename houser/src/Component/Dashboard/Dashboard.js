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

        this.deleteHouse = this.deleteHouse.bind(this)
    }
    
   componentDidMount() {
       axios.get(`/api/getAllHouses`).then(res => {
           this.setState({
               houses: res.data
           })
           console.log(res.data)
       })
   }

    deleteHouse(id) {
        axios.delete(`/api/deleteHouse/${id}`).then(res=> {
            this.setState({houses: res.data})
        })
    }

    render() {
        let housesArray = this.state.houses.map((element, index)=>{
            return(
                <div key={index} className="listings"> 
                    <div  className="single-listings">
                        <h5>{element.name}</h5>
                        <h5>{element.address}</h5>
                        <h5>{element.city}</h5>
                        <h5>{element.state}</h5>
                        <h5>{element.zip}</h5>
                    </div>
                    <div>
                        <button className="deleteBtn" onClick={_=> this.deleteHouse(element.id)}>Delete</button>
                    </div>
                </div>
            )
        })
        return(
            <div className="dashboard">
            <Link to="/Wizard"><button className="newPropertyBtn">Add New Property</button></Link>
                <div><House /></div>
                <h2>Home Listings</h2>
                <div>{housesArray}</div>
            </div>
        )
    }

}