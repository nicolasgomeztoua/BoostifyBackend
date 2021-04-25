require("dotenv").config({ path: "./config.env" });

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

const stripe = require("stripe")(
  "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"
);
//Conect DB
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

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

    cancel_url: `${"https://boostify.es/cart"}?canceled=true`,
  });

  res.json({ id: session.id });
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
