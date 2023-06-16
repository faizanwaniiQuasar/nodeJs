/////basic routing and creating a server

// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.status(200).send('hello from the server');
// });
// app.post('/', (req, res) => {
//   res.status(200).json({ message: 'hello from the server', app: 'notour' });
// });

// app.listen(port, () => {
//   console.log(`lsitening to port number${port}...`);
// });

////handling the get request:

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); /// middle ware
const port = 8000;
const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
app.get('/api/v1/rest', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      t: tours,
    },
  });
});

app.post('/api/v1/rest', (req, res) => {
  console.log(req.body);
  res.send('Done');
});

app.listen(port, () => {
  console.log(`Listening to port no. ${port}...`);
});
