import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multipart from "connect-multiparty";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: "../uploads" });

app.post("/upload", multipartMiddleware, (req, res) => {
  const files = req.files;

  console.log(files);

  res.json({ files });
});

app.use((error, req, res, next) => res.json({ error: error.message }));

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
