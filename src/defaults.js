require("dotenv").config();

/**
 * Change these defaults to your own.
 *
 * After setting up the server-side support, set baseUrl to your own.
 *
 * Feel free to use the default play button graphic listed below, however continued
 * support/hosting is not guaranteed :)
 */
module.exports = {
  serverUrl: process.env.SERVER_URL || "https://tools.missionmike.dev/video-placeholder-generator/",
  thumbnailWidth: 600,
  playButtonWidth: 80,
  playButtonUrl: "",
  videoId: process.env.VIDEO_ID || "H79gstz4qZI",
  playButtonOpacity: 80,
};
