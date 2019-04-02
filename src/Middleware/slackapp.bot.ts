const { RTMClient, WebClient } = require("@slack/client");
import { BOT_USER_OAUTH_ACCESS_TOKEN_SLACK } from "../constants";
import { string, number } from "joi";
// set your token to the bot token provided by slack
const token = BOT_USER_OAUTH_ACCESS_TOKEN_SLACK;
// Initialize a Web API client
const web = new WebClient(token);

interface Info {
  error: boolean;
  status: number;
  message: string;
  path: string;
}

export const callMe = (value: Info) => {
  const conversationId = "CHEUTLV08";
  // Now let's the WebClient to send to the workspace
  const infoString = "```" + JSON.stringify(value) + "```";
  web.chat.postMessage({ channel: conversationId, text: infoString, as_user: false, attachments	: infoString })
    .then((res) => {
      // `res` contains information about the posted message
    })
    .catch(console.error);
};