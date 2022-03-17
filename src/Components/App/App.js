import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults} from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist'; 
import { Spotify } from '../../util/Spotify';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
      {name: "Whole lotta love", artist: "Led Zeppelin", album: "Led Zeppelin II", id: 44},
      {name: "Black Dog", artist: "Led Zeppelin", album: "Led Zeppelin IV", id: 45},
      {name: "Rock n Roll", artist: "Led Zeppelin", album: "Led Zeppelin IV", id: 46}],
      playlistName: 'Superphyn Thyme',
      playlistTracks: [ 
        {name: "When the Levee breaks", artist: "Led Zeppelin", album: "Led Zeppelin IV", id: 47},
        {name: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", id: 48},]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id )) {
      return;
    } 
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter( ({id}) => id !== track.id );

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri)
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    }) 
  } 

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />

        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist 
            playlistName={this.state.playlistName}
            onNameChange={this.updatePlaylistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} 
            onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
