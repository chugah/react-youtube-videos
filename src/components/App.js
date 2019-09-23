import React from 'react';
import SearchBar from './search/SearchBar';
import VideoList from './videos/VideoList';
import VideoDetail from './videos/VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit('music');
  }

  onSearchSubmit = async(term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '25px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
