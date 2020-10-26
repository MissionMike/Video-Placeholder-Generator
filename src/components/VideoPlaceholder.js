import React from "react";

class VideoPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copySuccess: "" };
  }

  copyToClipboard = (evt) => {
    this.emailFriendlyUrl.select();
    document.execCommand("copy");
    evt.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    let thumbnailUrl =
      this.props.baseUrl +
      this.props.videoId +
      ".jpg" +
      "?play_button_url=" +
      encodeURIComponent(this.props.playButtonUrl) +
      "&width=" +
      this.props.thumbnailWidth +
      "&play_button_width=" +
      this.props.playButtonWidth +
      "&play_button_opacity=" +
      this.props.playButtonOpacity;

    return (
      <div>
        <div className="text-center">
          <img
            className="inline-block"
            id="video-placeholder"
            alt="Video Placeholder"
            src={
              thumbnailUrl + "&save=false" // Required to prevent the .jpg file from saving on the server
            }
          />
        </div>
        <div className="bg-blue-200 p-5 mt-5">
          <label htmlFor="email-friendly-url" className="text-bold mb-2 block pl-2">
            <strong>Email-friendly URL</strong>{" "}
            <em>*Note: if you use this URL, the thumbnail graphic cannot be changed unless removed from the server</em>{" "}
            <span className="text-green-700">{this.state.copySuccess}</span>
          </label>
          <textarea
            id="email-friendly-url"
            className="p-2 bg-white m-0 overflow-hidden w-full h-32"
            ref={(emailFriendlyUrl) => (this.emailFriendlyUrl = emailFriendlyUrl)}
            onClick={this.copyToClipboard}
            value={thumbnailUrl}
            readOnly
          ></textarea>
        </div>
      </div>
    );
  }
}

export default VideoPlaceholder;
