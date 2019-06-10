import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    //console.log(term);
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
export default App;
