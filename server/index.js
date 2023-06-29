import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import userRoutes from "./routes/users.js";
import questionRoutes from './routes/Question.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import sendGridTransport from 'nodemailer-sendgrid-transport'


const SENDGRID_API= ''

const app = express(); 
dotenv.config();
// express server created

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
    api_key:SENDGRID_API
    }
    }))

app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors());

//req is request
//rs is response
app.get('/',(req, res) =>{
    res.send("This is a stack overflow clone api")
})
app.use('/user', userRoutes) //if the url is /user/signup or /user/login
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)


app.post('/send', (req, res) => {
    var val = Math.floor(1000 + Math.random() * 9000);
    
    
    const { email} = req.body
    console.log(email)
    transporter.sendMail({
    to:email,
    from: 'otp.login.nullclass@gmail.com',
    subject:"OTP For Chatbot login",
    html:`<h3>Hello User! </h3>
    <p>We are great to have you . OTP for login is ${val}</p>`
    }).then(resp => {
    res.json({resp, "otp":{val}})
    })
    .catch(err => {
    console.log(err)
    })
    })

const PORT = process.env.PORT || 5000

//this will create static mongodb local storage
//we want cloud storage atlas

const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(
    DATABASE_URL,{ useNewUrlParser:true, useUnifiedTopology:true}
)
//is app is successfully running that is listening to server
    .then(()=> app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)}))
    .catch((err)=>console.log(err.message))

