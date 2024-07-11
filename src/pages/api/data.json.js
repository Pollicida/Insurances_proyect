import { MongoClient, ServerApiVersion } from "mongodb";
import client from "../../../db/config";

export const GET = async ({ params, request }) => {
  try{
    
    await client.connect();
    const res = await getData();
    return new Response(
      JSON.stringify(res)
    )

  }catch(e){
    return new Response(
      console.log(e),
      {
        status: 500
      }
    )
  }finally{
    await client.close();
  }
}

const getData = async () => {
  try{
    const data = await client.db("webstore").collection("products").find({}).toArray();
    return data;
  }catch(e){
    return e;
  }
}