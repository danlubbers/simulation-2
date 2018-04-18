import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard3 extends Component {
    constructor() {
        super();

        this.state = {
            mortgage: '',
            rent: ''
        };
    }

    inputMortgage(newMortgage) {
        this.setState({mortgage: newMortgage});
    }

    inputRent(newRent) {
        this.setState({rent: newRent});
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
                <div className="wizard3-header">
                <div className="recommended-rent">
                    <h3>Recommended Rent:</h3>
                </div>
                    <h3>Monthly Mortgage Amount</h3>
                        <input className="mortgage" value={this.state.mortgage} onChange={e=>{this.inputMortgage(e.target.value)}}/>
                    <h3>Desired Monthly Rent</h3>
                        <input className="rent" value={this.state.rent} onChange={e=>{this.inputRent(e.target.value)}}/>
                </div>
                <div className="previousBtn">
                   <Link to="/Wizard/Wizard2"><button>Previous Step</button></Link>

                </div>

                <div className="completeBtn">
                    <button className="addHouseBtn" onClick={() => this.addHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Complete</button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(param) {
    const {mortgage, rent} = param;
    return {mortgage, rent};
}

export default connect(mapStateToProps)(Wizard3)