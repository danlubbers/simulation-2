import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {wizard1} from '../../ducks/reducer';

class Wizard1 extends Component {
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

    // Takes name, address, etc from reducer and puts it into the state to show on site.
    componentDidMount() {
        const {name, address, city, state, zip} = this.props;
        this.setState({name, address, city, state, zip})
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

    render() {
        console.log(this.props);
        return(
            <div className="wizard"> 
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
                    <Link to="/Wizard/Wizard2"><button onClick={_=>this.props.wizard1(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Next Step</button></Link>
                </div>
            
                

            </div>
        )
    }

}

function mapStateToProps(param) {
    const {name, address, city, state, zip} = param;
    return {name, address, city, state, zip};
}
// This attaches {wizard1} to props, to invoke. use this.props.wizard1
export default connect(mapStateToProps, {wizard1} )(Wizard1)

