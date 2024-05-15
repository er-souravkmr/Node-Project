var express = require('express');
var router = express.Router();
const userModel = require("./users");

router.get('/', function(req, res) {
  res.render('index.ejs');
});
router.get('/create', async function(req, res) {
  const created = await userModel.create({
    username: "ankitpandit",
    nickname: "msdhoni",
    description:"This is the description of ankitpandit",
    categories:["nodejs","dhoni","express"]
  });
  res.send(created);
});

router.get('/find', async function(req,res){
  var user = await userModel.find({
   $expr:{
    $and:[
      {$gte:[{$strLenCP:'$nickname'},0]},
      {$lte:[{$strLenCP:'$nickname'},6]}
    ]
   }
  });
  res.send(user);
});






module.exports = router;

// router.get('/find', async function(req,res){
//   var user = await userModel.find({username:{$exists:true}});
//   res.send(user);
// });

// router.get('/find' ,async function(req,res){
//   let date1 = new Date('2023-12-10');
//   let date2 = new Date('2023-12-14');
//   const read = await userModel.find({datecreated:{$gte:date1,$lte:date2}});
//   res.send(read);
// });

// router.get('/find' ,async function(req,res){
//   const read = await userModel.find({categories : {$all:['dhoni']}});
//   res.send(read);
// });

// router.get('/find' ,async function(req,res){
//   let regex = new RegExp("^ankit$","i")
//   const read = await userModel.find({username : regex})
//   res.send(read);
// });

// router.get('/find',async function(req,res){
//   const read = await userModel.find();
//   res.send(read);
// });