import React, {Component} from 'react';
import { Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1&access_token=BQCtXzoXGWEbUynSsgjlo8TK-LnzRHci3nThYKXQlNDfQh1rTu0lmA8riMsFxF7lEwYGR4shxeiDsSDQrawd7uolgNHVUYS4v8iplYyduiadMvdDiTZWd60_NLQgMXXedz4sCslITNkOPXFg4kXTaxfiq8HBP6w';
        console.log('url: ', FETCH_URL);
        
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