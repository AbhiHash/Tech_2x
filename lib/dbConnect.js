import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  await mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "userdetails",
  });
}
