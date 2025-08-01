import { Database, MongoClient } from "mongo/mod.ts";
import "jsr:@std/dotenv/load";

const uri = Deno.env.get("MONGO_URI");
const DB = Deno.env.get("MONGO_DB_NAME");

const uri2 =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6";

let db: Database;

async function createMongoDbConnection() {
  try {
    const client = new MongoClient();
    await client.connect(uri);
    console.log(`Mongo db connection established/.... DB : ${DB}`);
    return client.database(DB);
  } catch (error) {
    console.log("error");
    throw new Error(error as any);
  }
}

db = await createMongoDbConnection();

export { createMongoDbConnection, db };
