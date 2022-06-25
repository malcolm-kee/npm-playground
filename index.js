const spawn = require('cross-spawn')

const result = spawn.sync('npm', ['view', 'react-showroom', 'version'], {
    encoding: 'utf-8'
})


// if (!result.error) {
//     const [, content] = result.output

//     console.log(content.trim())
// }

const dependencyResult = spawn.sync('npm', ['list', '--json'], {
    encoding: 'utf-8',
})

if (!dependencyResult.error) {
    const [, dependencyText] = dependencyResult.output

    console.log(dependencyText.trim())

    try {
        const depJson = JSON.parse(dependencyText)

        console.log(depJson)
    } catch (e) {

    }
}