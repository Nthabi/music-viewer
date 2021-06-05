import React, {Component} from 'react';
import './App.css';

class Profile extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <h3>Profile name</h3>
                <h4>Profile followers</h4>
            </div>
        )
    }
}

export default Profile;