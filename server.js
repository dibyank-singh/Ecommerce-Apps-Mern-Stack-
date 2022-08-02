import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';
import path from "path";


dotenv.config();
const app = express();

const PORT =process.env.PORT || 8000;


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

var __dirname= path.resolve()

if(process.env.NODE_ENV ==="production"){ 
    app.use(express.static(path.join(__dirname ,"/client/build")))
 
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
} else {
    app.get("/",(req , res)=>{
        res.send("api server is running test ")
    })
}


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();
Connection();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = process.env.Email_ID
paytmParams['MOBILE_NO'] = process.env.PH_NO
