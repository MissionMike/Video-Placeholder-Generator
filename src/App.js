import React from "react";

import * as utils from "./functions/utils";
import * as defaults from "./defaults";

import Header from "./components/Header";
import Form from "./components/Form";
import VideoPlaceholder from "./components/VideoPlaceholder";

/**
 * If you'd like to include any analytics or additional tracking
 * (Google Analytics, Sentry.io, LogRocket, etc.), create an "analytics.js"
 * file and add your code there.
 */
try {
  require(`./analytics.js`);
} catch (err) {
  console.log(err);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: defaults.serverUrl,
      videoId: defaults.videoId,
      thumbnailWidth: defaults.thumbnailWidth,
      playButtonUrl: defaults.playButtonUrl,
      playButtonWidth: defaults.playButtonWidth,
      playButtonOpacity: defaults.playButtonOpacity,
      copySuccess: false,
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
    this.setState({ playButtonOpacity: evt.target.value });
  };

  handleServerUrlChange = (evt) => {
    this.setState({ serverUrl: evt.target.value });
  };

  handleResetToDefault = (evt) => {
    this.setState({
      thumbnailWidth: defaults.thumbnailWidth,
      playButtonWidth: defaults.playButtonWidth,
      playButtonOpacity: defaults.playButtonOpacity,
    });
  };

  copyToClipboard = (evt) => {
    this.emailFriendlyUrl.select();
    document.execCommand("copy");
    evt.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    let playButtonUrl =
      this.state.playButtonUrl === defaults.playButtonUrl
        ? ""
        : "&pburl=" + encodeURIComponent(this.state.playButtonUrl);

    let thumbnailUrl =
      this.state.serverUrl +
      "thumbnails/" +
      this.state.videoId +
      ".jpg?w=" +
      this.state.thumbnailWidth +
      "&pbw=" +
      this.state.playButtonWidth +
      "&pbo=" +
      this.state.playButtonOpacity +
      playButtonUrl;

    return (
      <div className="font-sans">
        <Header />
        <div className="block lg:flex bg-gray-200">
          <div className="w-full lg:w-1/4 p-2 lg:p-5">
            <Form
              videoId={this.state.videoId}
              thumbnailWidth={this.state.thumbnailWidth}
              playButtonWidth={this.state.playButtonWidth}
              playButtonUrl={this.state.playButtonUrl}
              playButtonOpacity={this.state.playButtonOpacity}
              serverUrl={this.state.serverUrl}
              handleUrlChange={this.handleUrlChange.bind(this)}
              handleThumbnailWidthChange={this.handleThumbnailWidthChange.bind(this)}
              handlePlayButtonUrlChange={this.handlePlayButtonUrlChange.bind(this)}
              handlePlayButtonWidthChange={this.handlePlayButtonWidthChange.bind(this)}
              handlePlayButtonOpacityChange={this.handlePlayButtonOpacityChange.bind(this)}
              handleServerUrlChange={this.handleServerUrlChange.bind(this)}
              handleResetToDefault={this.handleResetToDefault.bind(this)}
            />
          </div>
          <div className="w-full lg:w-3/4 bg-gray-900 p-5 mt-5 lg:mt-0">
            <VideoPlaceholder thumbnailUrl={thumbnailUrl} />
          </div>
        </div>
        <div className="w-full text-sm text-center">
          <div className="bg-gray-200 p-5">
            <label htmlFor="email-friendly-url" className="text-bold text-base mb-2 block">
              <strong>Email-friendly URL (Click to copy to clipboard)</strong>{" "}
              <span className="text-green-700">{this.state.copySuccess}</span>
            </label>
            <textarea
              id="email-friendly-url"
              className="bg-gray-200 m-0 overflow-hidden w-full text-blue-700 text-center"
              ref={(emailFriendlyUrl) => (this.emailFriendlyUrl = emailFriendlyUrl)}
              onClick={this.copyToClipboard}
              value={thumbnailUrl}
              readOnly
            ></textarea>
            <p className="mt-5">
              <strong>Important!</strong> If you visit this URL, the thumbnail graphic cannot be changed (even in
              preview) unless the resulting file <strong className="text-blue-700">{this.state.videoId}.jpg</strong> is{" "}
              <strong>deleted</strong> from the server
            </p>
          </div>
        </div>
      </div>
    );
  }
}
