import React from 'react'
import { renderToString} from 'react-dom/server'
import express from 'express'
import App from '../shared/App'
let port= 8080;

let app=express();

app.get('*',(req,res,next)=>{
    const markup = renderToString(
        <App />
    );
    res.send(`
        ${markup}
    `);
})
app.listen(port,(req,res)=>{
    console.log("Server Listening at 8080");
})