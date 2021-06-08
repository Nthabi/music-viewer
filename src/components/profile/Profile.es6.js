import React, {Component} from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // const artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
        // const artists = this.props.artists;
        // console.log(this.props.artists.genres);
        return (
            <div>
                <div>
                    <img alt={this.props.artistName} className="arstist-img" src={this.props.img}/>
                </div>
                <h5>{this.props.artistName}</h5>
                <small>{this.props.followers} followers</small>
                <div>
                    {/* {
                        artists.genre.map(g => {
                            return(
                                <span>{g}</span>
                            )
                        })
                    } */}
                </div>
            </div>
        )
    }
}

export default Profile;