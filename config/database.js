import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);

async function ConexionAMongo() {
  try {
    await mongoose.connect(process.env.URI_MONGO);
  } catch (error) {
    console.log(error);
  }
}

ConexionAMongo();
