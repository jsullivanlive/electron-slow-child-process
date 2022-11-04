export async function runCommand(cmd) {
  console.log(`starting command: ${cmd}`);
  console.time(cmd);
  const res = require("child_process").execSync(cmd);
  console.timeEnd(cmd);
  console.log(res.toString());
}
