import React, {Component} from 'react';
import { Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Profile from './Profile.es6';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: '',
            query: '',
            artistName: '',
            img: '',
            followers: '',
            genre: []
        }
    }

    search() {
        const options = {
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist&limit=1&access_token=BQC2YerLmclonqf3jio-iaEh5_DyUl7BP48WLMZb9_Jv17HvauNpvRYONy1LcrNXI6B4u2UtP56nbg1l88qeebtguZmZyK2mtfNp92Nh62e2aQQfvPO0ggKVw23Y_XpGISf0EIcI0xmUseCq27WaLMT6eqAfexM`,
            method: 'GET'
          };
          
          axios(options)
            .then(response => {
                const artistsInfo = response.data.artists;
                const artistName = response.data.artists.items[0].name;
                const followers = response.data.artists.items[0].followers.total;
                const img = response.data.artists.items[0].images[0].url;
                const genre = response.data.artists.items[0].genres;
                this.setState({artistName, followers, img, genre});
              console.log(artistsInfo);
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
                <Button variant="outline-dark" onClick={() => this.search()}>Search</Button>
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