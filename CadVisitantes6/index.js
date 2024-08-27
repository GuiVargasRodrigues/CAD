const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const create = require('./Create.js');
const deleteX = require('./Delete.js');
const update = require('./Update.js');
const read = require('./Read.js');

const prisma = new PrismaClient();
const PORT = 3000;
const users = " ";

app.use(express.json());

// Without middleware
app.get('/', function (req, res) {
  const options = {
    root: __dirname,
  };
  const fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.post('/post', function (req, res) {
  const { nome, doc, id } = req.query;
  try {
      console.log('post')
      console.log('nome: ' + nome + " doc: " + doc + " id: " + parseInt(id))
      create.create(nome,doc,parseInt(id))
      res.status(200).json();  
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the user.' });
  }
});

app.delete('/delete', function (req, res) {
  const { id } = req.query;
  console.log('delete');
  console.log( "id:" + id );
  deleteX.deleteX(parseInt(id));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.put('/put', function (req, res) {
  console.log('put: ');
  console.log('req.query: ' + req.query);
  const { id, nome, doc } = req.query;
  console.log( "id: " + id + " nome: " + nome + " doc: " + doc)
  update.update(nome,doc,parseInt(id));	
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.get('/get', function (req, res) {
  const { id } = req.query;
  read.read(parseInt(id))
    .then(function(x) { console.log(x) })
    .catch(function(err){ console.log(err)})
    .finally(console.log('End Read!!'));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
  });

app.listen(PORT, function (err) {
  if (err) console.error(err);
  console.log('Server listening on PORT', PORT);
});
