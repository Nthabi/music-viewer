import React, {Component} from 'react';

class App extends Component {
    render() {
        return(
            <div>
                <title>Music app</title>
                <input placeholder="Search an artist"/>
                <button>Search</button>
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