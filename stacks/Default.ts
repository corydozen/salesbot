import { StackContext, NextjsSite, Api } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/webhook.handler",
    },
  });

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    bind: [api],
  });
  stack.addOutputs({
    ApiUrl: api.url,
    SiteUrl: site.url,
  });
}
