import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {wizard2} from '../../ducks/reducer';

class Wizard2 extends Component {
    constructor() {
        super();

        this.state = {
            houses: [],
            img: ''
        };
    }

    componentDidMount() {
        const {img} = this.props; 
        this.setState({img})
    }

    inputImage(newImage) {
        this.setState({img: newImage});
    }

    // addImage(image) {
    //     axios.post(`api/addHouse`, {image: image}).then(res => {
    //         this.setState({houses: res.data})
    //     })
    // }

    render() {
        console.log(this.props);
        return(
            <div className="wizard">
                <div className="wizard2-header">
                    <h3>Image URL</h3>
                    <input className="inputImage" value={this.state.img} onChange={e=>{this.inputImage(e.target.value)}}/> 
                </div>
                <div className="previousBtn">
                   <Link to="/Wizard/Wizard1"><button>Previous Step</button></Link>
                </div>
                <div className="nextStepBtn3">
                    <Link to="/Wizard/Wizard3"><button onClick={_=>this.props.wizard2(this.state.img)}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(param) {
    const {img} = param;
    return {img};
}

export default connect(mapStateToProps, {wizard2} )(Wizard2)