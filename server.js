require("dotenv").config({ path: "./config.env" });

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

const stripe = require("stripe")(process.env.SK);
//Conect DB
connectDB();
const app = express();
app.use(cors());
app.use('/webhook', express.raw({type: "*/*"}))
app.use(express.json())

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",

          product_data: {
            name: "Boostify boost",

            images: ["https://i.imgur.com/RRat6Bl.png"],
          },

          unit_amount: items[1].price,
        },

        quantity: 1,
      },
    ],

    mode: "payment",

    success_url: `${"https://boostify.es/success"}?success=true`,
    customer_email: items.email,
    cancel_url: `${"https://boostify.es/cart"}?canceled=true`,
  });

  res.json({ id: session.id });

});

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const endpointSecret = process.env.ENDPOINTSECRET;
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);

    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_failed': {
      const session = event.data.object;
      console.log(session)
      break;
    }
    case 'checkout.session.async_payment_succeeded':{
      const session = event.data.object;
      console.log(session)
      break;
    }
    case 'checkout.session.completed':{
      const session = event.data.object;
      console.log(session)
      break;
    }
    case 'checkout.session.expired':{
      const session = event.data.object;
      console.log(session)
      break;
    }
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return response.json({sucess:true});
});

//Error Handdler (should be the last piece of middleware)
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
