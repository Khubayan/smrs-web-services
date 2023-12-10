import dotenv from "dotenv";
dotenv.config({
  path: "./config.env",
});
import app from "./app";

// console.log(process.env);

const port: string | number = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
