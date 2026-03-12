const { MongoClient } = require("mongodb");

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri =
    "mongodb+srv://namastheDB:Advaith%40%240526@namasthenode.uapxy5m.mongodb.net/";
  const client = new MongoClient(uri);
  const dbName = "HelloWorld";

  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");
    // const data = {
    //   firstname: "Kalyani",
    //   lastname: "Pendyala",
    //   city: "Hanmakonda",
    //   contact: 8099099406,
    // };
    // const insertData = await collection.insertMany([data]);
    // console.log("Inserted document=>", insertData);
    const updateDocument = await collection.updateMany(
      { firstname: "Kalyani" },
      {
        $set: {
          firstname: "Balakarthik",
          lastname: "Pendyala",
          city: "Hyderabad",
        },
        $currentDate: { lastModified: true },
      },
    );
    const findResult = await collection.find({}).toArray();
    console.log("Found documents=>", findResult);
    // const removeDocument = await collection.deleteMany({lastname:  "Pendyala"});
    // console.log("Deleted documents=>", removeDocument);
    // const cursor = await collection
    //   .find({
    //     firstname: { $in: ["Kalyani"] },
    //   })
    //   .toArray();
    // console.log("Cursor=>", cursor);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);

///Notes
//1. Go to mongoDB website
//2. Create an account
//3. Create a cluster
//4. Create a database and collection
//5. Go to connect and copy the connection string and paste it here
//6. install mangoDB compass and connect to your cluster using the same connection string
//7. install mongoDB node package using npm install mongodb
//8. add, find, update, delete operations using the code above
