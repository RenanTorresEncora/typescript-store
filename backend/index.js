import express from 'express';
import cors from 'cors';
import jsonDB from './userCart.json' assert { type: 'json' };

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
const port = 5000;
const db = jsonDB;

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
app.post('/user/:id/cart/', cors(corsOptions), (req, res) => {
  const { userId } = req.body;
  console.log(req.body.userCart.products);
  res.status(200).json({ message: "POST successful" });
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
