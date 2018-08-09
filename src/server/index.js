import React from 'react'
import { renderToString} from 'react-dom/server'
import express from 'express'
import App from '../shared/App'
import cors from "cors"
let port= 8080;

let app=express()
app.use(cors())
app.use(express.static("public"))

app.get('*',(req,res,next)=>{
    const markup = renderToString(
        <App />
    );
    res.send(`
        <html>
            <head>
                <title>
                    React App with SSR
                </title>
                <script src='/bundle.js' defer></script>
            </head>
            <body>
            ${markup}
            </body>
        </html>
        
    `);
})
app.listen(port,(req,res)=>{
    console.log("Server Listening at 8080");
})