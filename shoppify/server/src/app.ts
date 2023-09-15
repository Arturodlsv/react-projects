console.clear();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//importing routes
import productsRoutes from "./routes/products";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', productsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} 😎😉`);
});
