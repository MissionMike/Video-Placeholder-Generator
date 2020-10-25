import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copySuccess: "" };
  }

  copyToClipboard = (evt) => {
    this.emailFriendlyUrl.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    evt.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    return (
      <div className="flex content-around flex-wrap bg-gray-200 pt-5 pb-5">
        <div className="lg:w-1/3"></div>
        <div className="w-full lg:w-1/3 p-2">
          <label htmlFor="video-url" className="text-bold mb-2 block pl-1">
            Video URL (YouTube, Vimeo):
          </label>
          <input
            type="url"
            className="input focus:outline-none focus:shadow-outline"
            defaultValue={this.props.defaultVideoUrl}
            placeholder="Enter a YouTube or Vimeo URL here:"
            id="video-url"
            name="video-url"
            onChange={this.props.handleURLChange}
          />
        </div>
        <div className="lg:w-1/3"></div>
        <div className="lg:w-1/3"></div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="email-friendly-url"
            className="text-bold mb-2 block pl-1"
          >
            <strong>Email-friendly URL</strong>{" "}
            <em>
              *Note: once used, the thumbnail cannot be changed unless removed
              from the server
            </em>{" "}
            <span className="text-green-700">{this.state.copySuccess}</span>
          </label>
          <textarea
            id="email-friendly-url"
            className="p-2 bg-white m-0 overflow-hidden w-full"
            ref={(emailFriendlyUrl) =>
              (this.emailFriendlyUrl = emailFriendlyUrl)
            }
            onClick={this.copyToClipboard}
            defaultValue={
              this.props.baseUrl +
              this.props.videoId +
              ".jpg" +
              "&play_button_opacity=" +
              this.props.playButtonOpacity
            }
          ></textarea>
        </div>
        <div className="lg:w-1/3"></div>
      </div>
    );
  }
}

export default Form;
