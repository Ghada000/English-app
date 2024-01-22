var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'project'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
})

module.exports = {
  getArticle: function(callback){
      const sql= 'SELECT * FROM `articles`'
      connection.query(sql,(error,results,fields)=>{
          callback(error,results)

      })
  }, 
  postArticle: function (newArticle, callback) {
      const sql = 'INSERT INTO `articles` SET title = ?, content = ?';
      connection.query(sql, [newArticle.title, newArticle.content], (error, results, fields) => {
          callback(error, results);
      });
  }, 
  deleteArticle: function(id, callback) {
      const sql = 'DELETE FROM `articles` WHERE id = ?';
      connection.query(sql, [id], (error, results, fields) => {
          callback(error, results);
      });
  },
  
  updateArticle: function (id, body, callback) {
    const sql = 'UPDATE `articles` SET `title` = ?, `content` = ? WHERE `id` = ?';
    connection.query(sql, [body.title, body.content, id], (error, results, fields) => {
      callback(error, results);
    });
  },
        

  getPronunciation : function(callback){
      const sql = 'SELECT * FROM `pronounciation`'
      connection.query(sql,(error,results,fields)=>{
          callback(error,results)
      })
  },

 
  getSynonyms : function(callback){
const sql = 'SELECT * FROM `synonyms`'
connection.query(sql,(error,results,fields)=>{
  callback(error,results)
})
  }, 

  getOneSynonym : function(id,callback){
      const sql ='SELECT * FROM `synonyms` WHERE id = ?'
      connection.query(sql,[id],(error,results,fields)=>{
          callback(error,results)
      })
  },

  postSynonym : function(newPost,callback){
      const sql = 'INSERT INTO `synonyms` SET content = ?'
      connection.query(sql,[newPost.content],(error,results,fields)=>{
callback(error,results)

      })
  },

  getPhrases : function(callback){
      const sql = 'SELECT * FROM `transitional`'
      connection.query(sql,(error,results,fields)=>{
          callback(error,results)
      })
  },

  postPhrase: function(newPhrase, callback) {
      const sql = 'INSERT INTO `transitional` SET category = ?, word = ?';
      connection.query(sql, [newPhrase.category, newPhrase.word], (error, results, fields) => {
          callback(error, results);
      });
  }
  , 

  getTenses : function(callback){
      const sql = 'SELECT * FROM `tenses`'
      connection.query(sql,(error,results,fields)=>{
          callback(error,results)
      })
  }

}