const HttpsProxyAgent = require("https-proxy-agent");
const sdk = require("aws-sdk");
const url = require("url");

const handler = async (event) => {
  const proxy = 'http://what.ever.com:8080';
  const urlProxy = new URL(proxy);

  const urlproxy = url.parse(proxy);

  const proxyAgent = new HttpsProxyAgent(urlProxy);

  sdk.config.httpOptions.agent = proxyAgent;
  const s3 = new sdk.S3();
  const res = await s3.listBuckets().promise();

  //Fconsole.log("event", event);
  return {
    foo: "bar",
  };
};

(async function () {
  const x = await handler({ foo: "bar" });

  console.log(x);
})();
