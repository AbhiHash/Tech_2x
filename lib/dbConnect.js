import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  console.log(data, " db is connected ");

  console.log(process.env.MONGO_DB_URL, " this is mongo url ");
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  const data = await mongoose.connect(process.env.MONGO_DB_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Tech_2x",
  });
}
