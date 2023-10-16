import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  console.log("webhook endpoint called");
  return {
    statusCode: 200,
    body: evt.requestContext.time,
  };
});
