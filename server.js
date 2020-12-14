const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index');
const bodyPArser = require('body-parser');
const cors = require('cors');

//instancia de express en miapp
const app = express();
app.use(cors());

app.use((rec,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested_With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    next();
});

//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended: true}));

//primera ruta
app.use('/api',apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del pr}oyecto backend");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;