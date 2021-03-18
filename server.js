require("dotenv").config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");
//Conect DB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  console.log("MongoDB connected");
};
connectDB();
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
}

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

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
