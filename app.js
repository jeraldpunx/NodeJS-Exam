var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

var Vehicle     = require('./model/vehicles');


app.route('/vehicles')
	.get(function(req, res) {
		// res.json({ message: "asdsd" })
		Vehicle.find({isDeleted: false}, function(err, vehicles) {
            if (err)
                res.send(err);

            res.json(vehicles);
        });
	});

app.route('/vehicles/new')
	.post(function(req, res) {
		var newVehicle = Vehicle({
		  	brand: 			req.body.brand,
			name: 			req.body.name,
			year_model: 	req.body.year_model,
			type: 			req.body.type,
			engine_type: 	req.body.engine_type,
			rating: 		req.body.rating,
			isDeleted: 		false
		});

		newVehicle.save(function(err) {
		if (err)
			res.send(err);

			res.json({ message: 'Vehicle created!' });
		});
	});

app.route('/vehicles/:vehicleId')
	.get(function(req, res) {
        Vehicle.findById(req.params.vehicleId, function(err, vehicle) {
            if (err)
                res.send(err);
            res.json(vehicle);
        });
    })
    .put(function(req, res) {
        Vehicle.findById(req.params.vehicleId, function(err, vehicle) {

            if (err)
                res.send(err);

            vehicle.name = req.body.name;  // update

            // save
            vehicle.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Vehicle updated!' });
            });

        });
    })
    .delete(function(req, res) {
    	//SOFT DELETE
    	Vehicle.findById(req.params.vehicleId, function(err, vehicle) {
            if (err)
                res.send(err);

            vehicle.isDeleted = 1;  // change to TRUE

            // save
            vehicle.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted!' });
            });

        });

    	//HARD DELETE
        // Vehicle.remove({
        //     _id: req.params.vehicleId
        // }, function(err, vehicle) {
        //     if (err)
        //         res.send(err);

        //     res.json({ message: 'Successfully deleted' });
        // });
    });


app.route('/vehicles/getVehicleByType/:type')
	.get(function(req, res) {
		Vehicle.find({type: req.params.type}, function(err, vehicles) {
            if (err)
                res.send(err);

            res.json(vehicles);
        });
	});

app.route('/vehicles/getVehicleByYearModel/:yearModel')
	.get(function(req, res) {
		Vehicle.find({year_model: req.params.yearModel}, function(err, vehicles) {
            if (err)
                res.send(err);

            res.json(vehicles);
        });
	});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});