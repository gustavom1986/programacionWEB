var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var testimoniosModel = require('../models/testimoniosModel');


/* GET home page. */
router.get('/', async function (req, res, next) {
  var testimonios = await testimoniosModel.getTestimonios()
  res.render('index',  { 
    testimonios });
});


router.post('/', async(req, res, next) => {
console.log(req.body) //estoy capturando datos//

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: '1986gm@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " " + apellido + " se contacto a través de la web y quiere más información a este correo: " + email + ". <br> Y además hizo el comentario: " + mensaje + ". <br> su tel es " + tel
  }
var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }});
  var info = await transport.sendMail(obj);
  res.render('index', {
    message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;
