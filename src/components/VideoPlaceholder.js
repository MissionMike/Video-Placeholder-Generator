import React from "react";

class VideoPlaceholder extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="lg:w-1/3"></div>
        <div className="lg:w-1/3">
          <img
            id="video-placeholder"
            alt="Video Placeholder"
            src={
              this.props.baseUrl +
              this.props.videoId +
              ".jpg?save=false" +
              "&play_button_opacity=" +
              this.props.playButtonOpacity
            }
          />
        </div>
        <div className="lg:w-1/3"></div>
      </div>
    );
  }
}

export default VideoPlaceholder;
