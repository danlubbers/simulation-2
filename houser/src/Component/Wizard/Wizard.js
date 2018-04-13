import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            houses: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        };
    }

    inputName(name) {
        this.setState({name: name});
    }

    inputAddress(address) {
        this.setState({address: address});
    }

    inputCity(city) {
        this.setState({city: city});
    }

    inputState(state) {
        this.setState({state: state});
    }

    inputZip(zip) {
        this.setState({zip: zip});
    }

    addHouse(name, address, city, state, zip) {
        axios.post(`/api/addHouse`, {name: name, address: address, city: city, state: state, zip: zip}).then(res => {
            console.log(res.data)
            this.setState({houses: res.data})
        })
    }

    render() {
        return(
            <div className="Wizard">
                <div className="listing">
                    <h1>Add New Listing</h1>
                    <Link to="Dashboard"><button className="cancelBtn">Cancel</button></Link>
                </div>

                <div className="inputBtns">
                    <input className="" value={this.state.name} onChange={e=>{this.inputName(e.target.value)}} placeholder=""/>
                    <input className="" value={this.state.address} onChange={e=>{this.inputAddress(e.target.value)}} placeholder=""/>
                    <input className="" value={this.state.city} onChange={e=>{this.inputCity(e.target.value)}} placeholder=""/>
                    <input className="" value={this.state.state} onChange={e=>{this.inputState(e.target.value)}} placeholder=""/>
                    <input className="" value={this.state.zip} onChange={e=>{this.inputZip(e.target.value)}} placeholder=""/>
                </div>
                <div className="completeBtn">
                    <button className="addhouseBtn" onClick={this.addHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Complete</button>
                </div>

            </div>
        )
    }

}