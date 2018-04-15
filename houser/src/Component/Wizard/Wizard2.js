import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard2 extends Component {
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
            <div className="wizard2">
                <div className="wizard2-header">
                    <h3>Image URL</h3>
                    <input className="inputImage" value={this.state.image} onChange={e=>{this.inputImage(e.target.value)}}/> 
                </div>
                <div className="previousBtn">
                   <Link to="/Wizard"><button>Previous Step</button></Link>
                </div>
                <div className="nextStepBtn3">
                    <Link to="/Wizard3"><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}