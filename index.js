import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>Hello Worlds!</h1>");
});

app.get('/contact', (req, res) => {
  //console.log(req.rawHeaders);
  res.send("Email me at: nibinmathias10@gmail.com");
});

app.get('/about', (req, res) => {
  //console.log(req.rawHeaders);
  res.send("I am a software engineer at Wipro Technologies");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});