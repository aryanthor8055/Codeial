const nodeMailer=require('../config/nodemailer');


//This is another way of exporting a method
exports.newComment=(comment)=>{
    console.log('inside newComment mailer',comment);

    nodeMailer.transporter.sendMail({
        from:'vishu16072001236809@gmail.com',
        to: comment.user.email,
        subject:"New Comment Published",
        html:'<h1> Yup,your Comment is now published </h1>'

    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
        console.log("Message sent",info);
        return;
    })
}