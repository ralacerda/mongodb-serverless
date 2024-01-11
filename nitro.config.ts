//https://nitro.unjs.io/config
export default defineNitroConfig({
  storage: {
    db: {
      driver: "mongodb",
      connectionString: import.meta.env.MONGO_KEY,
      databaseName: "learningServerlessDB",
      collectionName: "test",
    },
  },
  devStorage: {
    db: {
      driver: "mongodb",
      connectionString: import.meta.env.MONGO_KEY,
      databaseName: "learningServerlessDB",
      collectionName: "test",
    },
  },
  firebase: {
    gen: 2,
    // ...
  },
});
