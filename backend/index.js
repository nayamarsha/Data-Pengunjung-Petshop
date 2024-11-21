import express from "express";
import cors from "cors";
import BookingRoute from "./routes/BookingRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookingRoute);

app.listen(5000, ()=> console.log("Server started on port 5000"));
