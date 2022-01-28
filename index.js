const express = require("express");
const app = express();
//function funcaoInit () =>{ console.log()}

app.get("/usuarios",(request,response) => {

    response.json({usuarios:[]})
})

app.get("/produtos",(request,response) => {

        response.json({produtos:[]})
})

app.listen(3000,() => {
    console.log("servidor Teste iniciado")
});





