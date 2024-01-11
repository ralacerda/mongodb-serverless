import mongoDriver from "unstorage/drivers/mongodb";

export default defineNitroPlugin(() => {
  const storage = useStorage();

  // Dynamically pass in credentials from runtime configuration, or other sources
  const driver = mongoDriver({
    connectionString: useRuntimeConfig().mongoApi,
    databaseName: "learningServerlessDB",
    collectionName: "test",
  });

  // Mount driver
  storage.mount("db", driver);
});
