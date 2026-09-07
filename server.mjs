import { createServer } from "http";
import next from "next";

const dev = true;
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3005", 10);

const app = next({ dev, hostname, port, turbo: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      await handle(req, res);
    } catch (err) {
      console.error("Error handling request", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, () => {
    console.log(`> RHA Builders application server ready on http://${hostname}:${port}`);
  });
});



