var MongoClient = require('mongodb').MongoClient;
var express = require("express");
var router = express.Router();
var url = 'mongodb://localhost:27017';

const PORT = 27017;
app.listen(PORT, () => {});

// reloads browser
app.use(express.status('public'));

router.get('/', (req, res, next)=>{
	res.render('index');
});

var OrdersSchema = new Schema({
  Id: { type: String },
  locate: {type: String },
  description: {type: Number },
  date: {type: Date }
}, { versionKey: false });

var model = mongo.model('data', OrdersSchema, 'data');
var Schema = MongoClient.Schema;

var db = MongoClient.connect("mongodb://localhost:27017", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to ' + db, ' + ', response); }
});

router.get('orders/getOrder', (req, res, next)=>{
	var results = [];
	mongo.connect(url, (err, db)=> {
		assert.equal(null, err);
		var pointer = db.collection('orders').find();
		pointer.forEach((doc, err)=>{
			assert.equal(null, err);
			results.push(doc);
		}, ()=>{
			db.close();
			res.render('index', {orders: results});
		});
	});
});
 
router.post('orders/insertOrder', (req, res, next)=>{
	var order = {
		Id: req.body.Id,
		trackerId: req.body.trackerId,
		ocate: req.body.locate,
		description: req.body.description,
		date: req.body.date
	};

	mongo.connect(url, (err, db)=> {
		assert.equal(null, err);
		db.collection('orders').insertOne(order, (err, result)=>{
			assert.equal(null, err);
			console.log('item inserted');
			db.close();
		});
	});

	res.redirect('/');
});