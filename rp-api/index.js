const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
//TODO: bodyParser

// middlewares
dotenv.config();
app.use(express.json());

// Tüm isteklere CORS izni ver
app.use(cors({
  origin: 'http://localhost:3000', // İzin verilen kaynak (origin)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // İzin verilen HTTP metodları
  credentials: true, // Kimlik doğrulamasına izin ver
}));

// Preflight isteklerine izin ver
app.options('*', cors());

//app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Backend is running, successfully :)")
});
