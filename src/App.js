import React from "react";
import * as utils from "./functions/utils";

import Header from "./components/Header";
import Form from "./components/Form";
import VideoPlaceholder from "./components/VideoPlaceholder";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://tools.missionmike.dev/thumbnail-generator/",
      videoId: "",
      defaultVideoUrl: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
      playButtonOpacity: 0.8,
    };
  }

  componentDidMount() {
    let videoData = utils.parseVideo(this.state.defaultVideoUrl);
    this.setState({ videoId: videoData.id });
  }

  handleURLChange = (evt) => {
    let videoUrl = evt.target.value,
      videoData = utils.parseVideo(videoUrl);

    if (videoData.id.length > 0) {
      this.setState({ videoId: videoData.id });
    }
  };

  render() {
    return (
      <>
        <Header />
        <Form
          baseUrl={this.state.baseUrl}
          videoId={this.state.videoId}
          playButtonOpacity={this.state.playButtonOpacity}
          defaultVideoUrl={this.state.defaultVideoUrl}
          handleURLChange={this.handleURLChange.bind(this)}
        />
        <div className="lg:w-1/3"></div>
        <VideoPlaceholder
          baseUrl={this.state.baseUrl}
          videoId={this.state.videoId}
          playButtonOpacity={this.state.playButtonOpacity}
        />
      </>
    );
  }
}
