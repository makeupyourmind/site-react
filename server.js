const express = require('express');
const path = require('path');
var bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/temp', (req,res, data) =>{
  //res.send(name);
   //console.log("data : "+ data.name);
});

app.post('/confirmUser',(req,res) => {
   var name = req.body.post;
   var password = req.body.password;
   console.log("password : " + password);
   const { Client } = require('pg');
   const client = new Client({
     connectionString: process.env.DATABASE_URL,
    ssl: true,
   });

   client.connect();

   client.query('select password from usersdata where name = $1', [name], (err, result) => {
     if (err) throw err;
     for (let row of result.rows) {

     }

      var nameAdmin = name;
      console.log("nameAdmin : " + nameAdmin );

if(result.rows.length > 0){
      if(name === 'admin' && password === 'admin'){

        var passwordAdmin = result.rows[0].password;
        res.send(passwordAdmin);
      }
      if(name === 'admin' && password !== 'admin')
      {
        res.send(password);
      }
      if(name !== 'admin')
      {
        var matched = bcrypt.compareSync(password,result.rows[0].password);
        if(matched){
          res.send(matched);
          console.log("Okay");
        }
        else {
          res.send(matched);
          console.log("BAd");
        }
      }
}
else {
   res.send(name);
}

     client.end();
   });

})

// API calls
app.get('/api/hello', (req, res) => {

    const { Client } = require('pg');
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    ssl: true,
    });

    client.connect();
    client.query('select *from usersdata', (err, result) => {
      if (err) throw err;
      for (let row of result.rows) {
        //console.log("select login : " + JSON.stringify(row));
      }
      res.send(result.rows);// {express:}
      client.end();
    });

});


app.post('/del',(req,res) => {
  var name = req.body.post;
  console.log("name:" + name);
  const { Client } = require('pg');

const client = new Client({
 connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

client.query('Delete from usersdata Where name =$1', [name], function (err,result){
 if(err)
 {
   console.log(err);
 }

})
res.send(
  `User deleted`,
);

})

app.post('/api/res',(req,res) => {

  var name = req.body.post;
  var password = req.body.password;
  //console.log("req.body.data : " + req.body.data);
const { Client } = require('pg');
const client = new Client({
connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

client.query('SELECT name from usersdata WHERE name = $1 ', [name], (err, result) => {
  if (err) throw err;

  for (let row of result.rows) {
    console.log("Okay : " + JSON.stringify(row));
    var temp = result.rows[0].name;
  }

  if(name === temp){
    console.log("Okay enter");
  }
  else {
    res.status(500).send('Something broke!');
    console.log("BAAAAAAAAD enter");
  }

  client.end();
});

})

app.post('/forgot', (req, res) => {
  console.log(req.body.post);
  var email = req.body.post;
  var newPassword = req.body.newPassword;

  const { Client } = require('pg');
  const client = new Client({
  connectionString: process.env.DATABASE_URL,
    ssl: true,
  });

  client.connect();
  console.log("new password : " + newPassword);
  var salt = bcrypt.genSaltSync(10);
  var passwordToSave = bcrypt.hashSync(newPassword, salt);

  client.query("UPDATE usersdata SET password=$1 WHERE email = $2", [passwordToSave, email]);

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.post,					//receiver's email
    from: 'marinanov04016776@gmail.com',			//sender's email
    subject: 'Your password',//Subject
    text: 'Your password is ' + "'" + newPassword + "'" + '\n\nFrom support site My email : marinanov04016776@gmail.com'		//content		//HTML content
  };
  sgMail.send(msg);
  res.send("ok");


});


app.post('/api/world', (req, res) => {
  console.log("result : " + req.body.post);
    var date = req.body.date;
    var name = req.body.post;
    var email = req.body.email;
    var password = req.body.password;

    var salt = bcrypt.genSaltSync(10);
    var passwordToSave = bcrypt.hashSync(password, salt);

    const { Client } = require('pg');
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    ssl: true,
    });

    client.connect();

    client.query('INSERT into usersdata (name,password,email,date) values($1,$2,$3,$4)', [name,passwordToSave,email,date], (err, result) => {
      if (err) throw err;
      for (let row of result.rows) {
        console.log("Okay");
        //res.send( {express: JSON.stringify(row)});
      }
      //res.send('ok');
      client.end();
    });

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
