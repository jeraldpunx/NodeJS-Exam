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

// var vehicleModels = {
// 	all: function(callback){
// 		Vehicle.find(function (err, results) {
// 			callback(results);
// 		});
// 	},
// 	new: function(callback){
// 		var vehicle = new Vehicle({
// 			id: 5,
// 			brand: 'Mitsubishi',
// 			name: 'Montero',
// 			year: 2017,
// 			type: 'Car',
// 			engine_type: 'Gas',
// 			rating: 8,
// 		});

// 		vehicle.save(function(err, res) {
// 			if (err) 
// 				callback(err)
// 			else
// 				callback(res);

// 			console.log('Vehicle saved successfully!');
// 		});
// 	},
// 	update: function(callback){
// 		Vehicle.findOne({ id: 2 }, function (err, res){
// 			res.name = 'TEst';
// 			res.save(function(err, res){
// 				if (err) 
// 					callback(err);
// 				else
// 					callback(res);

// 				console.log('Vehicle saved successfully!');
// 			});
// 		});     
// 	},
// 	delete: function(vehicleID, callback) {
// 		Vehicle.findById({id: vehicleID}, function(err, res){
// 			callback(res);
// 		});
// 	},
// 	getByID: function(vehicleID, callback){
// 		Vehicle.find({id : vehicleID}, function(err, res){
// 			callback(res);
// 		});
// 	},
// 	getByType: function(vehicleType, callback){
// 		Vehicle.find({}, {type : vehicleType}, function(err, res){
// 			callback(res);
// 		});
// 	},
// 	getByBrand: function(vehicleBrand, callback){
// 		Vehicle.find({}, {type : vehicleBrand}, function(err, res){
// 			callback(res);
// 		});
// 	}
// }

// module.exports = vehicleModels;