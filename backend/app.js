const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


//IMPORTAR ROUTES
const api = require('./routes/APIRoutes');


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cors());

//ROUTE MIDDLEWARE
app.use('/api', api);


//PORT
const port = 5500;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});