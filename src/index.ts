import { createServer, IncomingMessage, ServerResponse } from "http"

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
    try {
        res.setHeader("Content-Type", "application/json");
        if (req.url === "/ping" && req.method === "GET") {
            res.writeHead(200);
            console.log(req.headers);
            res.end(JSON.stringify(req.headers));
        } else {
            res.statusCode = 404;
            console.log(res.statusCode);
            res.end();
        }
    } catch (err) {
        console.error(err)
        res.statusCode = 500
        res.end()
    }

};
    // Server creation
const server = createServer(requestListener);
const port = process.env.PING_LISTEN_PORT ?? 8000
server.listen(port, () => {
console.log(`Server is running on port: ${port}`)
});
