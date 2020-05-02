import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    // await mongoose.connect('mongodb://<user_name>:<password>@3.133.60.237:27017');
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.MONGO_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Mongo database");
  } catch (e) {
    console.log(`Error connecting to mongo database ${e}`);
  }
};
