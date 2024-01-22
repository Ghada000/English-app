const express = require('express');
const app = express();
const port = 8080;
const db = require('./mysql/index');

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/api/articles', (req, res) => {
  db.getArticle((error, results) => { 
      if (error) {
          console.error(error)
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(200).json(results); 
      }
  });
});

app.post('/api/articles', (req, res) => { 
  const newPost = req.body;
  db.postArticle(newPost, (error, results) => { 
      if (error) {
          console.error(error); 
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(201).json(results);
      }
  });
});

app.delete('/api/articles/:id', (req, res) => {
  const { id } = req.params;
  db.deleteArticle(id, (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(200).json(results);
      }
  });
});
app.put('/api/articles/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;  // Make sure that your request body has the 'title' and 'content' properties

  db.updateArticle(id, updated, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/pronunciation', (req, res) => {
  db.getPronunciation((error, results) => { 
      if (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(200).json(results);
      }
  })
});

app.get('/api/synonyms',(req,res)=>{
  db.getSynonyms((error,results)=>{
if (error){
  console.error(error)
  res.status(500).send({ error: 'Internal Server Error' })
}
else {
  res.status(200).json(results)
}
  })
});
app.get('/api/synonyms/:id', (req, res) => {
  const { id } = req.params;
  db.getOneSynonym(id, (error, results) => { 
      if (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(200).json(results);
      }
  });
});
app.post('/api/synonyms', (req, res) => {
  const newPost = req.body;
  db.postSynonym(newPost, (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(201).json(results);
      }
  });
});


app.get('/api/phrases',(req,res)=>{
  db.getPhrases((error,results)=>{
      if (error){
          console.error(error)
          res.status(500).send({ error: 'Internal Server Error' })
      }
      else {
          res.status(200).json(results)
      }
  })
});
app.post('/api/phrases', (req, res) => {
  const newPost = req.body;
  db.postPhrase(newPost, (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(201).json(results);
      }
  });
});

app.get('/api/tenses', (req, res) => {
  db.getTenses((error, results) => {
      if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.status(200).json(results);
      }
  });
});








app.listen(port, () => {
    console.log('Server listening on port', port);
  });
  