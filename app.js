const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/'; // Base path
const port = 8080; // Listening port

// Middleware function (Logging requests)
router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
});
  
router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
});

router.get('/lightsOn', function(req,res){
    res.sendFile(path + 'lightsOn.html');
  });

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Website is listening on port 8080!');
})