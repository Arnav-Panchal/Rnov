import { MongoClient } from 'mongodb';

//const mongodb = process.env.MONGODB_URI || 'mongodb+srv://arnavpanchal27:8FbQo4wRfkxsHmwx@cluster0.9ggoqhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;';
const uri = process.env.MONGODB_URI || 'mongodb+srv://arnavpanchal27:8FbQo4wRfkxsHmwx@cluster0.9ggoqhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;

//8FbQo4wRfkxsHmwx