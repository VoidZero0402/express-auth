const { createClient } = require("redis");
const configs = require("./configs");

const client = createClient({
    url: configs.redis.uri,
});

(async () => {
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
})();

module.exports = client;
