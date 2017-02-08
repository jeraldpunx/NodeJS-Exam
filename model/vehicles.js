var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jerald');

var vehicleSchema = mongoose.Schema({
    id: { type: Number, unique: true, required: true,  autoIncrement: true},
    brand: { type: String, minlength: 1,  required: true},
    name: { type: String, required: true, minlength: 1},
    year_model: { type: Number},
    type: { type: String},
    engine_type: { type: String},
    rating: { type: Number, max: 10},
    isDeleted: { type: Boolean }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);