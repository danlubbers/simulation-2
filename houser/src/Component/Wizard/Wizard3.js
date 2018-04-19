import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {wizard3} from '../../ducks/reducer';

class Wizard3 extends Component {
    constructor() {
        super();

        this.state = {
            houses: [],
            mortgage: '',
            rent: ''
        };
    }

    componentDidMount() {
        const {mortgage, rent} = this.props;
        this.setState({mortgage, rent})
    }

    inputMortgage(newMortgage) {
        this.setState({mortgage: newMortgage});
    }

    inputRent(newRent) {
        this.setState({rent: newRent});
    }

    addHouse(name, address, city, state, zip, img, mortgage, rent) {
        console.log(img)
        axios.post(`/api/addHouse`, {name: name, address: address, city: city, state: state, zip: zip, img: img, mortgage: mortgage, rent: rent}).then(res => {
            // this redirects you through redux back to the home page/dashboard
            this.props.history.push('/')
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
                    <button className="addHouseBtn" onClick={() => this.addHouse(this.props.name, this.props.address, this.props.city, this.props.state, this.props.zip, this.props.img, this.state.mortgage, this.state.rent)}>Complete</button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(param) {
    const {name, address, city, state, zip, img, mortgage, rent} = param;
    return {name, address, city, state, zip, img, mortgage, rent};
}

export default connect(mapStateToProps, {wizard3} )(Wizard3)
