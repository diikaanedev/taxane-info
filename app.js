const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./config/db');

const app = express();

require('dotenv').config({
    path: './.env'
});

app.use(bodyParser.json({
    limit: '10000mb'
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10000mb'
}));

app.use(cors());

/**
* Router Import
*/

const contryRouter = require('./routes/contry');

const regionRouter = require('./routes/region');

const departementRouter = require('./routes/departement');

const communeRouter = require('./routes/commune');

const villageRouter = require('./routes/village');

const concessionRouter = require('./routes/concession');

const groupementRouter = require('./routes/groupement');

const membreRouter = require('./routes/membre');

const agricultureRouter = require('./routes/agriculture');

const cultureRouter = require('./routes/culture');

/**
 * Execution Router 
 */

app.use('/api/contry', contryRouter);

app.use('/api/region', regionRouter);

app.use('/api/departement', departementRouter);

app.use('/api/commune', communeRouter);

app.use('/api/village', villageRouter);

app.use('/api/concession', concessionRouter);

app.use('/api/groupement', groupementRouter);

app.use('/api/membre', membreRouter);

app.use('/api/agriculture', agricultureRouter);

app.use('/api/culture', cultureRouter);

db.sync({
    //force: true
}).then(_ => {
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server started on ${port}`);
    });
})