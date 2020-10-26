import React from "react";
import * as utils from "./functions/utils";

import Header from "./components/Header";
import Form from "./components/Form";
import VideoPlaceholder from "./components/VideoPlaceholder";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://tools.missionmike.dev/video-thumbnail-generator/thumbnails/",
      thumbnailWidth: 600,
      playButtonWidth: 80,
      playButtonUrl: "https://tools.missionmike.dev/video-thumbnail-generator/assets/youtube_play.png",
      videoId: "7NOSDKb0HlU",
      playButtonOpacity: 80,
    };
  }

  handleUrlChange = (evt) => {
    let videoUrl = evt.target.value,
      videoData = utils.parseVideo(videoUrl);

    if (videoData.id.length > 0) {
      this.setState({ videoId: videoData.id });
    }
  };

  handleThumbnailWidthChange = (evt) => {
    this.setState({ thumbnailWidth: evt.target.value });
  };

  handlePlayButtonUrlChange = (evt) => {
    this.setState({ playButtonUrl: evt.target.value });
  };

  handlePlayButtonWidthChange = (evt) => {
    this.setState({ playButtonWidth: evt.target.value });
  };

  handlePlayButtonOpacityChange = (evt) => {
    this.setState({playButtonOpacity: evt.target.value});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="flex bg-gray-200">
          <div className="w-1/2">
            <Form
              baseUrl={this.state.baseUrl}
              videoId={this.state.videoId}
              playButtonUrl={this.state.playButtonUrl}
              playButtonOpacity={this.state.playButtonOpacity}
              handleUrlChange={this.handleUrlChange.bind(this)}
              handleThumbnailWidthChange={this.handleThumbnailWidthChange.bind(this)}
              handlePlayButtonUrlChange={this.handlePlayButtonUrlChange.bind(this)}
              handlePlayButtonWidthChange={this.handlePlayButtonWidthChange.bind(this)}
              handlePlayButtonOpacityChange={this.handlePlayButtonOpacityChange.bind(this)}
            />
          </div>
          <div className="w-1/2">
            <VideoPlaceholder
              baseUrl={this.state.baseUrl}
              videoId={this.state.videoId}
              thumbnailWidth={this.state.thumbnailWidth}
              playButtonUrl={this.state.playButtonUrl}
              playButtonWidth={this.state.playButtonWidth}
              playButtonOpacity={this.state.playButtonOpacity}
            />
          </div>
        </div>
      </div>
    );
  }
}
