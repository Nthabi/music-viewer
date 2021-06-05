import React, {Component} from 'react';
import './App.css';

class Profile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.img}/>
                </div>
                <h5>{this.props.artistName}</h5>
                <small>{this.props.followers}</small>
            </div>
        )
    }
}

export default Profile;