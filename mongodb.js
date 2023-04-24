//CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";
const dbName = "TaskManager";

const client = new MongoClient(uri);

async function run() {
  try {
    const res = await client.db(dbName).collection("task").deleteOne({
      description: "Food",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

run().catch(console.error);

// insertOne function
//       .collection("users")
//       .insertOne(
//         {
//           name: "Chirag",
//           age: 21,
//         });

// Find function
//  .find({
//     completed: false,
//   }).toArray((error, res)=>{
//     console.log(res)
//   })

// updateOne function
// .updateOne(
//   { Name: "Andrew" },
//   {
//     $inc: {
//       age: 1,
//     },
//   }
// )
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });
