import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';
import db from './userCart.js';

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const port = 5000;

// GET
app.get('/', (req, res) => {
  res.status(200).format({
    html: () => {
      res.send(
        `<html>
          <ul>${db.products
            .map(
              (item) => `
              <li>
                <h2>${item.title}</h2>
                <h3>${item.price}</h3>
              </li>`
            )
            .join('')}</ul>
        </html>`
      );
    },
    text: () => {
      res.send(
        db.products
          .map((item) => ` - ${item.title} / ${item.price} \n`)
          .join('')
      );
    },
    json: () => {
      res.json(db.products);
    },
  });
});

// POST
app.post('/user/cart/', cors(corsOptions), (req, res) => {
  req.on('data', (data) => console.log(data));
  readFile('./backend/userCart.js', 'utf-8').then((data) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write(JSON.stringify(data));
    res.end();
  });
});

app.all('*', (req, res) => {
  res.status(404).format({
    html: () => {
      res.send(
        `<html>
          <h1>404 - Resource not found</h1>
          <h3>Couldn't find resource "${req.url}" on server</h3>
        </html>`
      );
    },
    text: () => {
      res.send(
        `404 - Resource not found - Couldn't find resource "${req.url}" on server`
      );
    },
    json: () => {
      res.json({
        status: res.statusCode,
        url: req.url,
        message: "Resource not found - Couldn't find resource on server",
      });
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
