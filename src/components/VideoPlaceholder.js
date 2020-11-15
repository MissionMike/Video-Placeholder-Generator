import React from "react";

class VideoPlaceholder extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex">
        <img
          className="align-items-center m-auto top-0 bottom-0 left-0 right-0"
          id="video-placeholder"
          alt="Video Placeholder"
          src={
            this.props.thumbnailUrl + "&save=false" // Required to prevent the .jpg file from saving on the server
          }
        />
      </div>
    );
  }
}

export default VideoPlaceholder;
