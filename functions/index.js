const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HU6jQIOddhedElPeO3Twk5dyTfoJUJgXs8ZZjQ2HAG5K83ejuiVtAPoMlRNsdiR793SwLi4wd2x2huOpexf64j500BPG7yjOS');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);