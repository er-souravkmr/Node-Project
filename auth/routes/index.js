var express = require('express');
const passport = require('passport');
var router = express.Router();
const usermodel = require("./users")
const localStrategy = require("passport-local");
passport.use(new localStrategy(usermodel.authenticate()));

// var app = express();

// islogged-in middleware

function isLoggedin(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}


//register route

router.post('/register' , function (req,res){
  var userdata = new usermodel({
    username: req.body.username,
    secret: req.body.secret
  })

  usermodel.register(userdata,req.body.password)
   .then(function (registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/profile');
    })
   })

});


//login code

router.post("/login",passport.authenticate("local",{
   successRedirect: "/profile",
   failureRedirect:"/"
}),function (req,res){});


//logout code

router.get('/logout',function (req,res,next){
  req.logout(function(err){
    if(err){return next(err);}
    res.redirect('/');
  });
});


// Profile Route
router.get('/profile',function (req,res){
  res.render('profile')
});





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
 