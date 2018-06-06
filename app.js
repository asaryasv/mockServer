
const express     = require('express');
const app         = express();

const apiRoutes = express.Router(); 
const port = 3000; 

const movies = require('./mockData/movies.json');


apiRoutes.get('/movies', function(req,res) {
  res.status(200).json(movies);
})

app.use(apiRoutes);


app.listen(port, function(){
  console.log('server starts  at http://localhost:' + port);
});

