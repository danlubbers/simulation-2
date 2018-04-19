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

        this.deleteHouse = this.deleteHouse.bind(this);
        this.getAllHouses = this.getAllHouses.bind(this);
    }
    
    componentDidMount() {
       axios.get(`/api/getAllHouses`).then(res => {
           this.setState({
               houses: res.data
           })
           console.log(res.data)
       })
    }

    getAllHouses(){
        return this.componentDidMount();
    }

    deleteHouse(id) {
        console.log('delete it NOW!')
        axios.delete(`/api/deleteHouse/${id}`).then(res=> {
            let newHouseList = this.state.house.splice(id, 1);
            this.setState({houses: newHouseList})
            
        });
        console.log('FINALLY DELETED')
        this.componentDidMount();
    }

    render() {
        let housesArray = this.state.houses.map((element, index)=>{
            return(
                <div key={index} className="listings"> 
                    <div className="single-listings">
                        <House 
                            img={element.img}
                            name={element.name}
                            address={element.address}
                            city={element.city}
                            state={element.state}
                            zip={element.zip}
                            mortgage={element.mortgage}
                            rent={element.rent}
                            delete={_=> this.deleteHouse(element.id)}
                        />

                    </div>
                   
                </div>
            )
        })
        return(
            <div className="house-listings">
                <div className="dashboard"> 
                    <h2 className="dashboard-text">Dashboard</h2> 
                    <Link to="/Wizard/Wizard1"><button className="newPropertyBtn">Add New Property</button></Link>      
            </div>
                <h4 className="house-listings-text">Home Listings</h4>
                <div className="houses-array">{housesArray}</div>
            </div>
        )
    }

}