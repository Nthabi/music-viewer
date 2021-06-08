import React, {Component} from 'react';
import { Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Profile from './components/profile/Profile.es6';

class App extends Component {
     access_token = 'BQCAF8eA-y79VeixFuQwYwUzCBgTn0kK9pWc8esaEJe4CA1PdPKFqqMlh0wQFntkHTRfMmMcPzleJoClT0B7cLrH6ukwejmal51UdSwoxTGgFReR0heeTLPgwIWN_AOf3AOV6aCq1t1ReqzwKaEW7R3cl6siPSU';
     artistId= '0z4gvV4rjIZ9wHck67ucSV';
    constructor(props) {
        super(props);
        this.state = {
            artists: '',
            artistId: '',
            query: '',
            artistName: '',
            img: '',
            followers: '',
            genre: []
        };
    }

    // searchAndTopTracks(){
    //     search = ``;
    //     topTracks = ``;
    
    //     searchRequest = axios.get(this.search);
    //     topTracksRequest = axios.get(this.topTracks);

    //     axios.all([searchRequest, topTracksRequest])
    //         .then(axios.spread((...responses => {
    //             const searchResult = responses[0];
    //             const topTracksResult = responses[1];
    //     })))
    //         .catch(errors => {
    //             console.error(errors);
    //         });
    // }
     
    search() {
        const options = {
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist&limit=1&access_token=${this.access_token}`,
            method: 'GET'
          };
          
          axios(options)
            .then(response => {
                const artistsInfo = response.data.artists;
                const artistName = response.data.artists.items[0].name;
                const artistId = response.data.artists.items[0].id;
                const followers = response.data.artists.items[0].followers.total;
                const img = response.data.artists.items[0].images[0].url;
                const genre = response.data.artists.items[0].genres;
                this.setState({artistName, followers, img, genre});
              console.log(artistsInfo);
            });
        
    }

    getTopTracks() {
        const options = {
            url: `https://api.spotify.com/v1/artists/${this.artistId}/top-tracks?country=SA&access_token=${this.access_token}`,
            method: 'GET'
        };
        axios(options)
            .then(response => {
                console.log(response.data);
            });
    }


    render() {
        return(
            <div className="container">
                <h1>Music app</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for an artist" value={this.state.query} 
                        onChange={event=>{this.setState({query: event.target.value})}}/>
                    </InputGroup>
                   
                </FormGroup>
                <Button variant="outline-dark" onClick={() => this.getTopTracks()}>Search</Button>
                {
                    this.state.artistsInfo !== null ?
                    <div>
                        <div className="profile">
                    <Profile 
                        artists={this.state.artistsInfo}
                        artistName={this.state.artistName}
                        followers={this.state.followers}
                        img={this.state.img}/>
                    </div>
                    <section className="gallery">
                        Gallery
                    </section> 
                    </div>
                    : <div></div>
                }
            </div>
            
        )
    }
}

export default App;

// onChange is used to grap the contents of the input box