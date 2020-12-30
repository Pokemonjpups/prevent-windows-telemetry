# Prevent Specific Windows Programs from Running
Force quit specified Windows programs within 5 seconds of them running. This is **not** meant to protect your privacy. *(more info at [Background](#background))* 

## ⚠️ Warning ⚠️

Neither Pokemonjpups nor any repository contributors are responsible for any damage brought on to you (and/or your device) by this software. See [the license](LICENSE) for more information.

## Get Started
Please read through the entirety of this section before doing anything.
1. Pull the repository
2. Run `npm i`
3. Create a file called `config.json`. This is for the format:
```json5
{
    "processList": [
        "compat"
    ],
    "log": false,
    "testMode": true
}
```
- `processList` is an array of process names to find in your current process list, and close if they exist. Process names aren't taken literally - they only have to be a part of the process name, are aren't case sensitive, such as "compat" or "compattel" instead of "CompatTelRunner.exe". Note that multiple processes can be matched for the same name - so try to include as many characters as you can (for example, if you put "c" for compattelrunner, you might unintentionally end up closing a ton of programs that have "c" in their name!)
- `log` is a boolean indicating whether debug logs should be created. If disabled, logs are only created when a process is shut down, or an error occurs
- `testMode` is a boolean that, when set to true, will only log the process it plans to shutdown without actually shutting them down. This is highly recommended when first starting, or making config changes, so you know the right program(s) are being selected for shut down.
4. Open up Powershell as an administrator (search powershell, right click, click "Run as Administrator", click yes on the prompt) <sup>([Why do I need admin?](docs/admin.md))</sup>
5. Enter the directory of the repo
6. Run `node src/index.js`

## Automatically Running
You can probably build this with something like [nexe](http://npmjs.com/package/nexe), and then configure it to run with admin on startup, but I haven't done that yet, so I don't have any info on it.

### Pull Requests
Most PRs will be ignored for security/privacy reasons. Feel free to fork this and make your own edits if you'd like.

### Background
Windows 10 has this "compatibility telemetry" service that regularly scanned my disk, causing one of my hard disks to get really loud. Of course, I could just manually shut down the program every time I heard my hard drive spinning, but that got annoying. I tried various tutorials to try to get the program to stop running, but nothing seemed to work permanently, so I made this program to do it.

I didn't make this to protect my privacy (if I cared about privacy, I wouldn't be using Windows), so please don't think this program protects your privacy.
