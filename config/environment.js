

const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'bl0jpq4sUBP0GourVETjjzQP3r0fATACZ',
    db:'codeial_production',
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
    google_call_back_URL: "http://codeial.com/users/auth/google/callback",
    jwt_secret:'zBSDuMSDnKEMDTYaNe3gtNRUTPKI08no'

}

const production={
    name:'production',
    asset_path:'./assets',
    session_cookie_key:'blahsomething',
    db:'codeial_development',
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
    jwt_secret:'codeial'
}


module.exports=development;