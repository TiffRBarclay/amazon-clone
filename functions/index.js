const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const sk = require("./secretKey");
const stripe = require("stripe")(sk.sk);

// API

// App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(`Payment request recieved :) ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "usd",
  });

  //OK - created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
