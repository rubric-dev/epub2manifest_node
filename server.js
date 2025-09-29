const { Server } = require("r2-streamer-js/dist/es8-es2017/src/http/server");

const express = require("express");
const app = express();
const PORT = 3000;

const streamer = new Server();
streamer.start(app);

app.listen(PORT, () => {
  console.log(`✅ Readium streamer running at http://localhost:${PORT}`);
  console.log("👉 Access EPUB with: http://localhost:3000/?path=/absolute/path/to/your/book.epub");
});