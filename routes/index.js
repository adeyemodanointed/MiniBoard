var express = require('express');
var router = express.Router();

// An array of messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message Board', messages: messages});
});

router.get('/new', function(req, res, next){
  res.render('form',{title: 'Form'})
})

router.post('/new', function(req, res, next){
  const{author, messageText} = req.body;
  messages.push({
    text: messageText,
    user: author,
    added: new Date()});

    console.log(messages)

    res.redirect('/');
});


module.exports = router;
