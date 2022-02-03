const express = require( "express" );
const app = express()
const cors = require( "cors" );
const nodemailer = require( "nodemailer" );
app.use( cors() );
app.use(express.json())
const PORT = process.env.PORT || 8080;
app.post( "/contact-us", ( req, res ) =>
{
    const email = req.body.email;
    const message = req.body.message;
    const name = req.body.name;
    const number = req.body.number;
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dankparth@gmail.com",
        pass: "janupjgrbmbifkun",
      },
    } );
    
    transport.sendMail( {
        from: "dankparth@gmail.com",
        to:"dankparth@gmail.com",
        subject: "personal website",
        text: `name:${ name },
        message:${message },
        phone:${number },
        email:${email }`,
        
        
    }).then( response =>
    {
        res.send("mail sent!!")
    } ).catch( err =>
    {
        res.send('there was some problem while sending the mail:',err);
    })



} )

app.get( "/", ( req, res ) =>
{
    res.send( "hello world" );
})

app.listen(PORT,()=>console.log("listening"))