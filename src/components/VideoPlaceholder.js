import React from "react";

function VideoPlaceholder() {
  return (
    <div className="flex">
      <div className="lg:w-1/3"></div>
      <div className="lg:w-1/3">
        <img
          id="video-placeholder"
          alt="Video Placeholder"
          src="https://tools.missionmike.dev/thumbnail-generator/fe1gcKVcX6o.jpg?save=false&play_button_opacity=0.5"
        />
      </div>
      <div className="lg:w-1/3"></div>
    </div>
  );
}

export default VideoPlaceholder;
