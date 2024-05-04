import express from 'express';
import Connection from './database/db.js';
// // import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from "cors";
import bodyparser from 'body-parser';
import { v4 as uuid } from 'uuid';
// dotenv.config();
const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyparser.json({extended : true}));
app.use(bodyparser.urlencoded({extended: true}));
app.use('/', Router);

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

Connection();
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE'] = process.env.PAYTM_INDUSTRY_TYPE;
paytmParams['ORER_ID']= uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'martharachanapriya@gmail.com';
paytmParams['MOBILE_NO']='12344567890'
