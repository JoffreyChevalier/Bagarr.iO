const express = require("express");
const path = require("path");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const router = require("./router");

// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// PROXY
// On envoie toutes les requêtes commençant par /tournaments
// vers L'API challonge
app.use(
  "/tournaments*",
  createProxyMiddleware({
    pathFilter: "/tournaments*",
    target: "https://api.challonge.com/v1",
    auth: process.env.API_KEY,
    changeOrigin: true,
    secure: true,
  })
);

app.use(express.json());

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(router);

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;
