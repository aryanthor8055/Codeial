const fs=require('fs')
const rfs=require('rotating-file-stream')
const path=require('path');

const logDirectory=path.join(__dirname,'../production_logs')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream= rfs.createStream('access.log',{
    interval:'1d',
    path:logDirectory
})


const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'bl0jpq4sUBP0GourVETjjzQP3r0fATACZ',
    db:'codeial_production',
    Port:8000,
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    google_client_id: "806903296956-1uogh8k3b9mo4cr5u6q10d7c688mrh7c.apps.googleusercontent.com",
    google_client_Secret: "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",
    google_call_back_URL: "http://codeial.com/users/auth/google/callback",
    jwt_secret:'codeial',
    morgan:{
        mode:'dev',
        options:{stream:accessLogStream}
    }

}

const production={
    name:'production',
    asset_path:'./public/assets',
    session_cookie_key:'blahsomething',
    db:'codeial_development',
    Port:8000,
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    google_client_id: "313233209747-dnqmail3j800a2jvsuckqhohodhs7i63.apps.googleusercontent.com",
    google_client_Secret: "0FXb5EBWa4xRfJ8jR-1HKMd2",
    google_call_back_URL: "http://localhost:8000/users/auth/google/callback",
    jwt_secret:'zBSDuMSDnKEMDTYaNe3gtNRUTPKI08no',
    morgan:{
        mode:'combined',
        options:{stream:accessLogStream}
    }
}


module.exports=development;