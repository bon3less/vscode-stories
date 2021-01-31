import { RecordingStatus } from "./status";
import { StoryType } from "./types";

export const _prod_ = process.env.NODE_ENV === "production";
export const accessTokenKey = "@stories/token" + (_prod_ ? "" : "dev");
export const refreshTokenKey = "@stories/refresh-token" + (_prod_ ? "" : "dev");
export const apiBaseUrl = _prod_
  ? "https://vscode-stories-295306.uk.r.appspot.com"
  : "http://localhost:8080";
export const gifUploadLimit = 33554432; //32MB
const cloudBucket = "gif_stories";
export const gifPublicUrl = `https://storage.googleapis.com/${cloudBucket}`;