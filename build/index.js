"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const requestListener = function (req, res) {
    try {
        res.setHeader("Content-Type", "application/json");
        if (req.url === "/ping" && req.method === "GET") {
            res.writeHead(200);
            console.log(req.headers);
            res.end(JSON.stringify(req.headers));
        }
        else {
            res.statusCode = 404;
            console.log(res.statusCode);
            res.end();
        }
    }
    catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
    }
};
const server = (0, http_1.createServer)(requestListener);
const port = process.env.PING_LISTEN_PORT;
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
