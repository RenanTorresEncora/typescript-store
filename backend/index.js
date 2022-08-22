import express from 'express';
import cors from 'cors';
import jsonDB from './userCart.json' assert { type: 'json' };
import { readFile, writeFile } from 'fs';

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use([cors(corsOptions), express.json()]);

const port = 5000;
const db = jsonDB;

// GET
app.get('/', (req, res) => {
  res.status(200).format({
    html: () => {
      res.send(
        `<html>
          <ul>${db.userCart.products
            .map(
              (item) => `
              <li>
                <h2>Product Id: ${item.productId}</h2>
                <h3>Quantity: ${item.quantity}</h3>
              </li>`
            )
            .join('')}</ul>
        </html>`
      );
    },
    text: () => {
      res.send(
        db.userCart.products
          .map((item) => `ProductId: ${item.productId} / Qty: ${item.quantity} \n`)
          .join('')
      );
    },
    json: () => {
      res.json(db.userCart.products);
    },
  });
});

// POST
app.post('/user/:userId/cart/', (req, res) => {
  const { userId } = req.params;
  const { userCart } = req.body;
  if (db.userId === Number(userId)) {
    db.userCart = userCart;
    writeFile('./backend/userCart.json', JSON.stringify(db), () => {
      res.status(201).json({ success: true, message: 'POST successful' });
    });
  } else {
    res.status(400).json({success: false, message: `No such user with ID: ${userId}`})
  }
});

//404 REQ
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
