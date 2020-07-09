// const url = require('url')
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASS}@cluster0.hajzu.gcp.mongodb.net/resume?retryWrites=true&w=majority`;

// Create cached connection variable
let cachedDb = null;

async function connect() {
  const clientInst = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const client = await clientInst.connect();
  return await client.db("resume");
}

async function connectToDatabase() {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  cachedDb = await connect();
  return cachedDb;
}

const getClientDB = async () => await connectToDatabase();

module.exports = getClientDB;
