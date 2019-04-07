"use strict";

/**
 * This API utilizes LINE Api
 * @see https://developers.line.biz/en/docs/
 * @param {String} lineAccessToken
 * @param {String} lineChannelSecret
 * @returns {*}
 */
module.exports = (lineAccessToken, lineChannelSecret) => {
  const line = require("./api/lineApi");

  // init with auth
  line.init({
    accessToken: process.env.LINE_NINJA_ACCESS_TOKEN,
    // (Optional) for webhook signature validation
    channelSecret: process.env.LINE_NINJA_CHANNEL_SECRET
  });

  return line;
};
