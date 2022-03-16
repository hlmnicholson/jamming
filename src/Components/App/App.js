import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults} from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist'; 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [
      {name: "Whole lotta love", artist: "Led Zeppelin", album: "Led Zeppelin II", id: 44},
      {name: "Black Dog", artist: "Led Zeppelin", album: "Led Zeppelin IV", id: 45},
      {name: "Rock n Roll", artist: "Led Zeppelin", album: "Led Zeppelin IV", id: 46}
    ]}
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}
}

export default App;
