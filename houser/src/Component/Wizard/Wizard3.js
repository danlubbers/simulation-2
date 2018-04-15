import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard3 extends Component {
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


    render() {
        return(
            <div className="wizard3">
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
                   <Link to="/Wizard2"><button>Previous Step</button></Link>

                </div>
            </div>
        )
    }
}