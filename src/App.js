import React from "react";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import VideoPlaceholder from "./components/VideoPlaceholder";

export default class App extends React.Component {
  state = {
    videoUrl:
      "https://tools.missionmike.dev/thumbnail-generator/fe1gcKVcX6o.jpg?save=false&play_button_opacity=0.5",
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="flex content-around flex-wrap bg-gray-200 h-48">
          <div className="lg:w-1/3"></div>
          <div className="w-full lg:w-1/3 p-2">
            <label for="video-url" className="text-bold mb-2 block pl-1">
              Video URL (YouTube, Vimeo):
            </label>
            <input
              type="url"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value=""
              placeholder="https://www.youtube.com/watch?v=dckX1V0Fi3c"
              id="video-url"
              name="video-url"
            />
          </div>
        </div>
        <div className="lg:w-1/3"></div>
        <VideoPlaceholder />
      </>
    );
  }
}
