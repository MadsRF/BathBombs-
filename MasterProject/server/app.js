// moduels
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// modul to get the owner webpage
var path = require('path');

// sends data to html side 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/../website_files'));
app.set('view engine', 'html');

// connect to database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "BathBombs_DB"
});

con.connect();

// routes
app.get('/api', function(request, response){
    console.log('GET request received at /') 
    con.query("SELECT * FROM customers", function (err, result) {
        if (err) throw err;
        else{
            response.json(result);
            //response.sendFile(__dirname + "/index.html");
        }

    });
});

app.get('/api-products', function(request, response){
    console.log('GET request received at /') 
    con.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        else{
            response.json(result);
            //response.sendFile(__dirname + "/index.html");
        }

    });
});

app.get('/owner', function (req, res) {
    console.log('GET on /owner');
    res.sendFile(path.resolve(__dirname + '/../website_files/owner.html'));
    //res.sendFile(__dirname + '/../website_files/owner.html');
});

app.get('/login', function (req, res) {
    console.log('GET on /login');
    res.sendFile(path.resolve(__dirname + '/../website_files/login_owner.html'))


});

app.get('/api-owner', function(req, res){
    console.log('GET on /api-owner');
    con.query("SELECT * FROM owner", function (err, rows){
        if(err)
            throw err;
        console.log(rows);
        res.json(rows);
    })
});


/*
app.get('/api', function(req, res){
    con.query("SELECT * FROM customers", function (err, rows) {
        if(err)
            throw err;
        console.log(rows);
        res.json(rows);     

    });
});


app.get('/api/:id', function(req, res){
    var quy = "SELECT * FROM customers where id="+req.params.id;
    
    con.query(quy, function (err, rows) {
        if(err)
            throw err;
        console.log(rows[0]);
        res.json(rows[0]);     

    });
});
*/





// listen for trafic and display on localhost:9000
app.listen(9000, function () {
    console.log('Connected to port 9000');
});
