import yaml from "js-yaml";
import fs from "fs";

try {
  const friends = yaml.load(fs.readFileSync("./src/friends.yml", "utf-8"));
  fs.mkdirSync("./dist", { recursive: true });
  fs.writeFileSync("./dist/friends.json", JSON.stringify(friends));
} catch (e) {
  console.error(e);
}
