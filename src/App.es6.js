import React, {Component} from 'react';
import { Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Profile from './Profile.es6';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artistName: '',
            img: '',
            followers: ''
        }
    }

    search() {
        const options = {
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist&limit=1&access_token=BQAvXeTwWORXBfTAIDCcHBLlTyHUZ9pShNFjzd48gNFz-TN2GPH8MrxXQimM_oKDYg3GmGVfkGLsB0PaMXrlbm7myTyme2e_7x2dGs8dI1HW1OhFnzjmjh-WilKymp63ue1j8JCkdbnkSlV_TAcUPcHM1nnC8DI`,
            method: 'GET'
          };
          
          axios(options)
            .then(response => {
                const artistName = response.data.artists.items[0].name;
                const followers = response.data.artists.items[0].followers.total;
                const img = response.data.artists.items[0].images[0].url;
                this.setState({artistName, followers, img});
              console.log(response.data.artists);
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
                <div className="profile">
                    <Profile 
                        artistName={this.state.artistName}
                        followers={this.state.followers}
                        img={this.state.img}/>
                </div>
                <section className="gallery">
                    Gallery
                </section>
            </div>
            
        )
    }
}

export default App;

// onChange is used to grap the contents of the input box