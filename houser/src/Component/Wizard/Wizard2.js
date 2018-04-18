import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard2 extends Component {
    constructor() {
        super();

        this.state = {
            houses: [],
            image: ''
        };
    }

    inputImage(newImage) {
        this.setState({image: newImage});
    }

    addImage(image) {
        axios.post(`api/addHouse`, {image: image}).then(res => {
            this.setState({houses: res.data})
        })
    }

    render() {
        return(
            <div className="wizard">
                <div className="wizard2-header">
                    <h3>Image URL</h3>
                    <input className="inputImage" value={this.state.image} onChange={e=>{this.inputImage(e.target.value)}}/> 
                </div>
                <div className="previousBtn">
                   <Link to="/Wizard/Wizard1"><button>Previous Step</button></Link>
                </div>
                <div className="nextStepBtn3">
                    <Link to="/Wizard/Wizard3"><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(param) {
    const {img} = param;
    return {img};
}

export default connect(mapStateToProps)(Wizard2)