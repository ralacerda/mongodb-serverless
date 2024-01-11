export default eventHandler(async () => {
  try {
    await useStorage("db").setItem(
      "test/ssh",
      "dropetl is awesome, now from an droplet"
    );
    return "<h1>Nitro is awesome</h1>";
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
});
