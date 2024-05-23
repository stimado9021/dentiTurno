const express = require('express');
import router  from './routes/index';
import {PORT} from "./config/envs"
import {Request,Response} from "express";
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
import {AppDataSource} from "./config/data-source";

const app=express()
//const PORT = process.env.PORT;
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(router)

const main = async ()=>{
    try {
          await AppDataSource.initialize();
        app.listen(PORT,()=>{
            console.log('listening on port',PORT);
        })
    } catch (error) {
        console.error(error);
    }
  
}

main()
