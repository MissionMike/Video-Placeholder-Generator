import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="p-5">
        <label htmlFor="video-url" className="text-bold mb-2 block pl-2">
          Video URL (YouTube, Vimeo):
        </label>
        <input
          type="url"
          className="input focus:outline-none focus:shadow-outline"
          defaultValue={"https://www.youtube.com/watch?v=" + this.props.videoId}
          placeholder="Enter a YouTube or Vimeo URL here:"
          id="video-url"
          name="video-url"
          onChange={this.props.handleUrlChange}
        />
        <div className="w-1/2 mt-5">
          <label htmlFor="thumbnail-width" className="text-bold mb-2 block pl-2">
            Thumbnail Width (Pixels)
          </label>
          <input
            type="number"
            className="input focus:outline-none focus:shadow-outline"
            min="1"
            max="1920"
            defaultValue="600"
            id="thumbnail-width"
            name="thumbnail-width"
            onChange={this.props.handleThumbnailWidthChange}
          />
        </div>
        <label htmlFor="play-button-url" className="text-bold mb-2 block pl-2 mt-5">
          Play Button Graphic URL
        </label>
        <input
          type="url"
          className="input focus:outline-none focus:shadow-outline"
          defaultValue={this.props.playButtonUrl}
          placeholder="Enter URL to a play button graphic here:"
          id="play-button-url"
          name="play-button-url"
          onChange={this.props.handlePlayButtonUrlChange}
        />
        <div className="flex">
          <div className="w-1/2 mt-5">
            <label htmlFor="play-button-width" className="text-bold mb-2 block pl-2">
              Play Button Width (Pixels)
            </label>
            <input
              type="number"
              className="input focus:outline-none focus:shadow-outline"
              min="1"
              max="1920"
              defaultValue="80"
              id="play-button-width"
              name="play-button-width"
              onChange={this.props.handlePlayButtonWidthChange}
            />
          </div>
          <div className="w-1/2 mt-5">
            <label htmlFor="play-button-opacity" className="text-bold mb-2 block pl-2">
              Play Button Opacity (Percent)
            </label>
            <input
              type="number"
              className="input focus:outline-none focus:shadow-outline"
              min="0"
              max="100"
              defaultValue="80"
              id="play-button-opacity"
              name="play-button-opacity"
              onChange={this.props.handlePlayButtonOpacityChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
