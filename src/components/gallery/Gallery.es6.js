import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Gallery extends Component {
    render() {
        const {tracks} = this.props;
        return(
            <div>Gallery
                {
                    tracks.map((track, key) => {
                        const trackImg = track.album.images[0].url;
                        return (
                            <div key={k} className="track">
                                <img src={trackImg} className="track-img" alt="track"/>
                                <p className="track-text"> {track.name} </p>
                            </div>
                        )   
                    })
                }
            </div>
        )
    }

}

export default Gallery;