const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const publicFolder = path.join(__dirname, '../public/');

console.log('this is the public folder', publicFolder);
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static(publicFolder));

app.get(('  '), (req, res) => {
  res.send('');
})

app.listen(2424, () => {
  console.log('Server is connected @ port 2424');
});