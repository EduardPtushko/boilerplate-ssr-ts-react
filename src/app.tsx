import express from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./client/components/App";

const app = express();
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.static("public"));

const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";

app.use(
    morgan(morganFormat, {
        skip: function(req, res): boolean {
            return res.statusCode < 400;
        },
        stream: process.stderr,
    }),
);

app.use(
    morgan(morganFormat, {
        skip: function(req, res): boolean {
            return res.statusCode >= 400;
        },
        stream: process.stdout,
    }),
);

app.get("/", (req, res): void => {
    const html = renderToString(<App />);
    const template = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src='bundle.js'></script>
        </body>
    </html>
    `;
    res.send(template);
});

export { app };
