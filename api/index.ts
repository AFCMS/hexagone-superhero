import express from "express";
import cors from "cors";
import axios from "axios";

const allowedDomains = ["https://superheroapi.com"];

const app = express();

app.use(cors());

app.get("*", async (req, res) => {
  try {
    const targetPath = req.query.url ? req.query.url.toString() : undefined;
    if (!targetPath) {
      res.status(400).send("No URL provided");
      return;
    }

    const isAllowedDomain = allowedDomains.some((domain) =>
      targetPath.startsWith(domain)
    );

    if (!isAllowedDomain) {
      res
        .status(400)
        .send("URL must be from store.steampowered.com or steamcommunity.com");
      return;
    }

    const response = await axios.get(targetPath);
    res.status(response.status).send(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .send(error.response?.data || "Error proxying request");
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
