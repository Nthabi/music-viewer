import React, {Component} from 'react';
import { Button, FormControl, FormGroup, InputGroup} from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return(
            <div className="container">
                <title>Music app</title>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for an artist"/>
                    </InputGroup>
                    {/* <InputGroup.Addon>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon> */}
                </FormGroup>
                <Button variant="outline-dark">Search</Button>
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