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
            <div className="wizard"> 
                <div className="wizard-header">
                    <h1 className="add-new-text">Add New Listing</h1>
                    <Link to="/"><button className="cancelBtn">Cancel</button></Link>
                </div>
                <div className="inputBtns">
                    <h3>Property Name:</h3>
                    <input className="inputName" value={this.state.name} onChange={e=>{this.inputName(e.target.value)}} placeholder=""/>

                    <h3>Address:</h3>
                    <input className="inputAddress" value={this.state.address} onChange={e=>{this.inputAddress(e.target.value)}} placeholder=""/>
                    
                    <h3>City:</h3>
                    <input className="inputCity" value={this.state.city} onChange={e=>{this.inputCity(e.target.value)}} placeholder=""/>

                    <h3>State:</h3>
                    <input className="inputState" value={this.state.state} onChange={e=>{this.inputState(e.target.value)}} placeholder=""/>

                    <h3>Zip:</h3>
                    <input className="inputZip" value={this.state.zip} onChange={e=>{this.inputZip(e.target.value)}} placeholder=""/>
                </div>

                <div className="nextStepBtn2">
                    <Link to="/Wizard2"><button>Next Step</button></Link>
                </div>
            
                <div className="completeBtn">
                    <button className="addHouseBtn" onClick={() => this.addHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Complete</button>
                </div>

            </div>
        )
    }

}