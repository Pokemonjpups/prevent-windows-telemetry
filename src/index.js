const { snapshot } = require("process-list");
const cp = require('child_process');
const sleep = require('util').promisify(setTimeout);
const config = require('./config');

const run = async () => {
    const tasks = await snapshot('name', 'pmem', 'pid');
    // console.log(tasks);
    for (const t of tasks) {
        for (const bad of config.processList) {
            if (t.name.toLowerCase().indexOf(bad) !== -1) {
                console.log(`[info] start shutdown process for process:`, t);
                let id = t.pid;
                let memUsageInMB = parseInt(t.pmem, 10) * 1e-6;
                if (typeof id === 'number' && Number.isInteger(id) && Number.isSafeInteger(id)) {
                    try {
                        if (config.testMode === true) {
                            console.log(`[info] test mode set to "${config.testMode}", so this process is not being shut down."`);
                        } else {
                            let res = cp.execSync(`powershell -Command "Stop-Process -ID ${id} -Force"`);
                            console.log(res.toString());
                        }
                    } catch (e) {
                        // most common exception would be lack of permission (e.g. tried to run this script as non-admin), or "process does not exist"
                        console.error(`[error] could not shut down pid "${id}". this message can probably be ignored unless it repeatedly shows up. details:`, e);
                    }
                } else {
                    console.log(`[info] not closing process due to invalid type, not int, or not safe int`);
                }
                break;
            }
        }
    }
}
let _i = 0;
const main = async () => {
    while (true) {
        if (config.log) {
            console.log(`[info] run cycle`, _i);
        }
        await run();
        await sleep(5000);
        _i++;
    }
}
main();