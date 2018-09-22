const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const publicFolder = path.join(__dirname, '../public/');


app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static(publicFolder));

app.get(('/projects/:id'), (req, res) => {
  res.redirect(307, `${id}`);
})

app.listen(2424, () => {
  console.log('Server is connected @ port 2424');
});