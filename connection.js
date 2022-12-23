// const { doesNotMatch } = require("assert");
const { MongoClient } = require("mongodb");

//connection url
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

//databse name
const dbName = "Inventory";

//function to connect to database.
async function main() {
  await client.connect();
  console.log("Connected Sucessfully to server");
  const db = client.db(dbName);
  const collection = db.collection("CCR");
  return "done";
}

main().then(console.log).catch(console.error);
// .finally(() => client.close());
