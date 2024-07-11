import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${import.meta.env.USER_NAME}:${import.meta.env.USER_PASSWORD}@clusterkuxtal.dxnjxlj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterKuxtal`;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export default client;