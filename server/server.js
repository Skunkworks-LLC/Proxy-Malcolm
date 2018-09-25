const express = require('express');
const path = require('path');

const app = express();

const publicFolder = path.join(__dirname, '../public/');

app.use(express.static(publicFolder));
app.use('/projects/:id', express.static(publicFolder));

app.all('/projects/:id', (req, res) => {
  var projectId = req.url.slice(9);
  res.redirect(307, `${projectId}`);
});

app.listen(2424, () => {
  console.log('Server is connected @ port 2424');
});