const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/products');
const Commande = require('./models/commandes');
var compression = require('compression');
var helmet = require('helmet');

const app = express() ;
var dev_db_url = 'mongodb+srv://JalilMongoDB:orangerama1234@ramacluster.1vprk.mongodb.net/?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,
{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie ! '))
    .catch(() => console.log('Connexion à MongoDB échouée ! '));

app.use(compression()); //Compress all routes
app.use(express.json());
app.use(helmet());

app.use(cors());
app.use('/products', (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));
});

app.get('/commanders', (req, res, next) => {
    Commande.find()
        .then(commandes => res.status(200).json(commandes))
        .catch(error => res.status(400).json({ error }));
});


app.post('/commandes', (req, res, next) => {
    console.log(req.body);
    delete req.body._id;
    //console.log(req.body);
    let {date, clientDef, commandeDef, totalDef} =  req.body;
    try {
        let commande = new Commande({
            date,
            clientDef,
            commandeDef,
            totalDef
        })
        console.log(commande);
        commande.save()
        res.status(201).json({message: 'Commande reçue !', status:'success', data : commande})
    }catch(err){
        console.log(err)
        next(err)
    }

    /*
    const commande = new Commande({
        ...req.body
    })
    commande.save()
        .then(() => res.status(201).json({message: 'Commande reçue !'}))
        .catch(error => res.status(400).json({ error }))*/
});

module.exports = app;
