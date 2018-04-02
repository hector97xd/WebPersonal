
var express = require('express');
var app = express();
var server = require('http').createServer(app);
const path = require('path');

app.set('port' , process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));

// app.get('/index',function (req,res) {
//     res.render('index',{qs: req.query});
// })
/*
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hector.guevarah97@gmail.com',
        pass: 'hectorMGH97'
    }
});
const mailOptions = {
    from: 'hector.guevarah97@gmail.com', // sender address
    to: 'hector.guevarah97@gmail.com', // list of receivers
    subject: 'MY CONTACT WEB', // Subject line
    html: '<table><tr><td><label>Correo:</label></td><td><p>corre@gmail.com</p></td></tr><tr><td><label>Mensaje:</label></td><td><p>Contenido del mensaje</p></td></tr></table>'// plain text body

};
transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
});*/
app.listen(app.get('port'), ()=>{
    console.log("server listening in port "+ app.get('port'));
});
