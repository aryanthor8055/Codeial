module.exports.profile=function(req,res){
    return res.end("<h1>User Profile</h1>");
}


//Render the sign Up page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}


//Render the sign In page
module.exports.signup=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}


//get the sign up data

module.exports.create=function(req,res){
   //Todo later 
}

//Sign in and create a session for the user
module.exports.createSession=function(req,res){
    //Todo later 
 }

