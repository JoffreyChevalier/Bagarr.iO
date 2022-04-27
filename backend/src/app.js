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

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");

app.use(router);

// PROXY
// On envoie toutes les requêtes commençant par /tournaments
// vers L'API challonge
app.use(
  /\/tournaments.*/g,
  createProxyMiddleware({
    target: "https://api.challonge.com/v1",
    auth: "GrischK:g1VM2bDNu0DJZx1ALp5wfYx2QsRaqZ8bugIl76ZE", // TODO à mettre dans le .env
    changeOrigin: true,
  })
);

// ready to export
module.exports = app;
