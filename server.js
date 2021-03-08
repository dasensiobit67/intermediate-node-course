const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const port=8000;
const app= express();
const User=require('./models/User');
mongoose.connect('mongodb://localhost/userData');

app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  // User.create()
  console.log("POST");
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
  console.log("GET "+req.params.id);
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
  console.log("UPDATE "+req.params.id);
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
  console.log("DELETE "+req.params.id);
})