import { intro, outro, select } from "@clack/prompts";

intro(`create-my-app`);

const projectType = await select({
  message: "Pick a project type.",
  options: [
    { value: "ts", label: "TypeScript" },
    { value: "js", label: "JavaScript" },
    { value: "coffee", label: "CoffeeScript", hint: "oh no" },
  ],
});

outro(`You're all set!`);
