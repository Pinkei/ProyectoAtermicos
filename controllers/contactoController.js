const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/contact", (req, res)=>{
    res.render("contact")
})

router.post("/enviar", async(req, res)=>{
    const {nombre, email, mensaje} = req.body;


//si da algo distinto:
if (!nombre || !email || !mensaje){
    return res.render("contact", {error: "todos los campos son obligatorios"});
}

//Configurar transportador (ethereal.email)

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'shad.legros@ethereal.email',
        pass: 'cjCYkdR1KvPuTCtxJe'
    }
});

//Configuraracion del correo electronico

const mailOptions = {
    from: email,
    to: "keilasol930@gmail.com",
    subject:"Formulario de contacto",
    text:  `
    Nombre: ${nombre} /n 
    Email: ${email} /n 
    Mensaje: ${mensaje}
    `
};

//Try.catch estructura de control para manejar errores y excepciones

try{
    //Enviar correo electronico
    await transporter.sendMail(mailOptions);
    res.render("confirmacion", {
        nombre: req.body.nombre
    });
} catch (error){
    console.log(error);
    res.render("contact", {error: "Error al enviar correo"});
}


})
module.exports = router;