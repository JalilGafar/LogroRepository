const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    type : {type: String, require: true},
    nom : {type: String, require: true},
    taille : {type: String, require: true},
    prix : {type: Number, require: true},
    disponible : {type: Boolean, require: true},
    commande : {type: Number, require: true},
    imageUrl : {type: String, require: true}
})

module.exports = mongoose.model('Product', productSchema);
