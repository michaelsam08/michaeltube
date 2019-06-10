import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    // response.data.items;
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
