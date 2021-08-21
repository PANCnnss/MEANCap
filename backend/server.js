const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('body-parser');
const cors = require('cors');
const router = require('./components/network/routes');
const db = require('./db')
const {config} = require('./config')

const corsOptions = {
    // origin: ['http://zyrebox.com/','http://localhost:4200/',],
    origin: '*',
}

// const router = express.Router();
let app = express();
// 
app.use(morgan('tiny'));
//Datos por json
app.use(bodyParser.json());
//datos por urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// inicializar router
// app.use(router);
app.use(cors(corsOptions))
db(config.mongoDbUrl)

router(app)

// SIN ROUTER
// app.use('/',function(req,res){
//     res.send('servidor express');
// })
app.listen(4200);
console.log("listening on http://localhost:4200");