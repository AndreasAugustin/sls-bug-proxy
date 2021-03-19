const HttpsProxyAgent = require("https-proxy-agent");
const sdk = require("aws-sdk");

const handler = async (event) => {
  const proxy = "http://what.ever.com:80";
  const url = new URL(proxy);
  const proxyAgent = new HttpsProxyAgent(url);

  sdk.config.httpOptions.agent = proxyAgent;
  const s3 = new sdk.S3();
  const res = await s3.listBuckets().promise();

  console.log("event", event);
  return {
    foo: "bar",
  };
};

(async function () {
  const x = await handler({ foo: "bar" });

  console.log(x);
})();
