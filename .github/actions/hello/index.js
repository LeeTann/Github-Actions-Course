const core = require('@actions/core');
const github = require('@actions/github');

try {
    // throw(new Error("some error test message"))
    const name = core.getInput('who-to-greet')
    console.log(`Hello ${name}`)
    
    const time = new Date();
    core.setOutput("time", time.toTimeString())
    
    core.startGroup("Logging Github Object")
    console.log(JSON.stringify(github, null, '\t'))
    core.endGroup()
    
} catch(error) {
    core.setFailed(error.message)
}
