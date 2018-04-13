import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Wizard extends Component {

    render() {
        return(
            <div className="Wizard">
                <Link to="Dashboard"><button className="cancelBtn">Cancel</button></Link>
            </div>
        )
    }

}