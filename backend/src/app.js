const express = require("express");
const path = require("path");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

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
  createProxyMiddleware({
    pathFilter: "/tournaments*",
    target: "https://api.challonge.com/v1",
    auth: process.env.API_KEY,
    changeOrigin: true,
    secure: true,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router
const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
