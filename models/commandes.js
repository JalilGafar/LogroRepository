const mongoose = require('mongoose');
//const Product = require('./products')

const commandeSchema = mongoose.Schema(
    {   date : {type: Date, require:true},
        clientDef : {
            name : {type: String, require: true},
            password : {type: String, require: true},
            tel : {type: Number, require: true},
            lieu : {type: String, require: true},
            _id:{type: String, require: true}
        },        
        commandeDef : [
            {
            type : {type: String, require: true},
            nom : {type: String, require: true},
            taille : {type: String, require: true},
            prix : {type: Number, require: true},
            disponible : {type: Boolean, require: true},
            commande : {type: Number, require: true},
            imageUrl : {type: String, require: true}
        }],
        totalDef : {type: Number, require: true}
        
    }
)

module.exports = mongoose.model('Commande', commandeSchema);