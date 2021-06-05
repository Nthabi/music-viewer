import React, {Component} from 'react';
import { Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: ''
        }
    }

    search() {
        const options = {
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist&limit=1&access_token=BQAvXeTwWORXBfTAIDCcHBLlTyHUZ9pShNFjzd48gNFz-TN2GPH8MrxXQimM_oKDYg3GmGVfkGLsB0PaMXrlbm7myTyme2e_7x2dGs8dI1HW1OhFnzjmjh-WilKymp63ue1j8JCkdbnkSlV_TAcUPcHM1nnC8DI`,
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
                <Button variant="outline-dark" onClick={() => this.search()}>Search</Button>
                <div className="profile">
                    <div>Artist picture</div>
                    <h5>Artist name</h5>
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