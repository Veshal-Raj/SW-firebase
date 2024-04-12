const express = require('express')
const cors = require('cors') 
const admin = require('firebase-admin')

const serviceAccount = require('./push-notification-50e0e-firebase-adminsdk-5g6ac-1b4ac76fbb.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


const app = express()

app.use(cors('*'))
app.use(express.json());


app.post('/testData', (req, res) => {
    const { title, body,count, token } = req.body;
    console.log(req.body)
    const message = {
        notification: {
            title:   count,
            body: body,
           
        },
        token: token
    };

    setTimeout(() => {
        admin.messaging().send(message).then(
            (response) => console.log("Successfully send message: ", response)
        ).catch((error) => console.error("Error sending message", error))
        
    }, 5000);

    return res.status(200).json({ success: true })
})


app.listen(3001, ()=>{
    console.log('server is running on 3001')
})