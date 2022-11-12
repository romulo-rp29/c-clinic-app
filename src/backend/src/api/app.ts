import express from "express";

const app = express();

app.get('/', (_req, res) => res.status(418).send('Hello World!'));

export default app;