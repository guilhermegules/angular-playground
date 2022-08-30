import express from "express";
import bodyParser from "body-parser";
import multipart from "connect-multiparty";
import fs from "fs";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multipartMiddleware = multipart({ uploadDir: "./uploads" });

app.post("/upload", multipartMiddleware, (req, res) => {
  const files = req.files;

  console.log(files);

  fs.rename(
    `./${req.files.file.path}`,
    `./uploads/${req.files.file.name}`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  res.json({ files });
});

app.get("/download", (req, res) => {
  res.download(`./uploads/${req.query.filename}`);
});

app.use((error, req, res, next) => res.json({ error: error.message }));

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
